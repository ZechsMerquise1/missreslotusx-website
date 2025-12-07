import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const sessionType = String(formData.get("sessionType") || "unknown");
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const details = String(formData.get("details") || "");

    const sessionTypeLabel =
      sessionType === "inPerson"
        ? "In-Person"
        : sessionType === "video"
        ? "Video"
        : sessionType === "text"
        ? "Text"
        : sessionType;

    const to = process.env.CUSTOMS_TO_EMAIL;
    const from = process.env.CUSTOMS_FROM_EMAIL;

    if (!to || !from) {
      console.error("Missing CUSTOMS_*_EMAIL env vars");
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 500 }
      );
    }

    // 1. Send notification to YOU (Mistress Lotus)
    await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `[Session Request] ${sessionTypeLabel} session from ${name || "Unknown"}`,
      text:
        `New session request\n\n` +
        `Session type: ${sessionTypeLabel}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Details:\n${details}\n`,
    });

    // 2. Send confirmation email to the USER
    await resend.emails.send({
      from,
      to: email,
      subject: `Your ${sessionTypeLabel} session request has been received`,
      text:
        `Hi ${name || "there"},\n\n` +
        `Your ${sessionTypeLabel.toLowerCase()} session request has been successfully received.\n\n` +
        `I will review your details and reply shortly with availability, rate information, and next steps.\n\n` +
        `Thank you for your interest.\n` +
        `— Mistress Lotus`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending session request email", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
