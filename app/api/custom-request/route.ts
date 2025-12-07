import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const customType = String(formData.get("type") || "unspecified");
    const details = String(formData.get("details") || "");

    const to = process.env.CUSTOMS_TO_EMAIL;
    const from = process.env.CUSTOMS_FROM_EMAIL;

    if (!to || !from) {
      console.error("Missing CUSTOMS_*_EMAIL env vars");
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 500 }
      );
    }

    // 1) Email to you (Mistress Lotus)
    await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `[Custom Request] ${customType} custom from ${name || "Unknown"}`,
      text:
        `New custom request\n\n` +
        `Type: ${customType}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Details:\n${details}\n`,
    });

    // 2) Confirmation email to the user (best-effort)
    if (email) {
      try {
        await resend.emails.send({
          from,
          to: email,
          subject: `Your ${customType} custom request has been received`,
          text:
            `Hi ${name || "there"},\n\n` +
            `Your ${customType} custom request has been successfully received.\n\n` +
            `I will review your details and reply with pricing, availability, and next steps.\n\n` +
            `Thank you for your interest.\n` +
            `— Mistress Lotus`,
        });
      } catch (err) {
        console.error("Failed to send custom confirmation email", err);
        // do not throw; your main notification already worked
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending custom request email", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
