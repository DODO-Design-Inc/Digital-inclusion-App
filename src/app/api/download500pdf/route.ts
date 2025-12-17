import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // 1. Parse request body
  let body: { email: string; token: string };

  try {
    body = await request.json();

    if (!body.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!body.token) {
      return NextResponse.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // 2. Verify reCAPTCHA with Google
  try {
    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.token}`,
      }
    );

    const googleData = await googleRes.json();

    if (!googleData.success) {
      return NextResponse.json(
        { error: "Failed reCAPTCHA verification" },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed" },
      { status: 500 }
    );
  }

  // 3. Get Mailchimp credentials
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_500_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json(
      { error: "Server configuration error. Missing Mailchimp credentials." },
      { status: 500 }
    );
  }

  // 4. Mailchimp endpoint
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const data = {
    email_address: body.email,
    status: "subscribed" as const,
    tags: ["500 voices of women"],
  };

  // 5. Send to Mailchimp
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        message: "Success! You are now subscribed.",
        data,
      });
    }

    const errorData = await response.json();

    if (errorData.title === "Member Exists") {
      return NextResponse.json(
        { error: "You are already subscribed." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          errorData.detail ||
          "Something went wrong. Please try again later.",
      },
      { status: response.status }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
