import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // 1. Store in Database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        subject: service,
        message,
        status: "NEW",
      },
    });

    // 2. Send Email Notification
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "BITSOL Leads <leads@bitsolmarketing.com>",
        to: "adnan.bashir7895@gmail.com",
        subject: `New Lead: ${name} - ${service}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #00D9FF;">New Inquiry from BITSOL Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interested Service:</strong> ${service}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
            <p style="font-size: 12px; color: #888; margin-top: 30px;">
              This inquiry has also been stored in the BITSOL Admin Dashboard.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
