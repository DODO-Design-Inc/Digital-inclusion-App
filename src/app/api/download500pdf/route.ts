import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // 1. Get the email from the request body
  let body: { email: string };
  try {
    body = await request.json();
    if (!body.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // 2. Get your "secrets" from environment variables
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_500_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json(
      { error: "Server configuration error. Missing Mailchimp credentials." },
      { status: 500 }
    );
  }

  // 3. Construct the Mailchimp API URL
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  // 4. Create the data payload for Mailchimp
  const data = {
    email_address: body.email,
    status: "subscribed" as const,
    tags: ["500 voices of women"],
  };

  // 5. Send the request to Mailchimp
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        // Mailchimp uses Basic Auth. Username can be anything, password is the API key.
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // 6. Handle the response from Mailchimp
    if (response.ok) {
      // Success
      const data = await response.json();
      return NextResponse.json({
        message: "Success! You are now subscribed.",
        data,
      });
    } else {
      // Handle errors
      const errorData = await response.json();
      // Check for a common error: Member Exists
      if (errorData.title === "Member Exists") {
        return NextResponse.json(
          { error: "You are already subscribed." },
          { status: 400 }
        );
      }
      // Other Mailchimp errors
      return NextResponse.json(
        {
          error:
            errorData.detail ||
            "Something went wrong. Please try again later.",
        },
        { status: response.status }
      );
    }
  } catch (error) {
    // Handle fetch or other network errors
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
