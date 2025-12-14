import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    jobTitle,
    emailAddress,
    organization,
    agreed,
    captchaToken,
  } = body;

  if (
    !firstName ||
    !lastName ||
    !jobTitle ||
    !emailAddress ||
    !organization ||
    !captchaToken
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  /* ---------------- CAPTCHA VERIFY ---------------- */

  const captchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: captchaToken,
      }),
    }
  );

  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    return NextResponse.json(
      { error: "Captcha verification failed" },
      { status: 403 }
    );
  }

  /* ---------------- MAILCHIMP ---------------- */

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_500_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json(
      { error: "Mailchimp configuration missing" },
      { status: 500 }
    );
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const data = {
    email_address: emailAddress,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      JOB: jobTitle,
      ORG: organization,
      AGREED: agreed ? "YES" : "NO",
    },
    tags: ["Contact Form"],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `anystring:${apiKey}`
      ).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    if (result.title === "Member Exists") {
      return NextResponse.json(
        { error: "You already submitted this form." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: result.detail || "Mailchimp error" },
      { status: response.status }
    );
  }

  return NextResponse.json({ message: "Form submitted successfully" });
}
