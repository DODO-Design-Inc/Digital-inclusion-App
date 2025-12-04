import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // 1. Parse and validate body
  let body: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    emailAddress: string;
    organization: string;
    agreed: boolean;
  };

  try {
    body = await request.json();

    const { firstName, lastName, jobTitle, emailAddress, organization } = body;

    if (!firstName || !lastName || !jobTitle || !emailAddress || !organization) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
  // 2. Load Mailchimp secrets
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_500_AUDIENCE_ID; // ensure correct
  const serverPrefix = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json(
      {
        error: "Missing Mailchimp environment variables.",
      },
      { status: 500 }
    );
  }

  // 3. Mailchimp URL
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  // 4. Prepare Mailchimp payload
  const data = {
    email_address: body.emailAddress,
    status: "subscribed" as const,
    merge_fields: {
      FNAME: body.firstName,
      LNAME: body.lastName,
      JOB: body.jobTitle,
      ORG: body.organization,
      AGREED: body.agreed ? "YES" : "NO",
    },
    tags: ["Contact Form"],
  };

  // 5. Send request to Mailchimp
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

    // 6. Mailchimp response handling
    const mailchimpResponse = await response.json();

    if (response.ok) {
      return NextResponse.json({
        message: "Form submitted successfully!",
        data: mailchimpResponse,
      });
    }
    // Member already exists
    if (mailchimpResponse.title === "Member Exists") {
      return NextResponse.json(
        { error: "You already submitted this form." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          mailchimpResponse.detail ||
          "Something went wrong. Please try again.",
      },
      { status: response.status }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unknown server error" },
      { status: 500 }
    );
  }
}
