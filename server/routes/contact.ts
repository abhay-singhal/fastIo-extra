// import { RequestHandler } from "express";

// export const handleContact: RequestHandler = (req, res) => {
//   const { name, email, company, message } = req.body ?? {};
//   if (!name || !email || !message) {
//     return res
//       .status(400)
//       .json({ ok: false, error: "Missing required fields" });
//   }
//   // In a real app, forward to a ticketing/email service.
//   return res.json({ ok: true });
// };


import { RequestHandler } from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || "business@fastio.in",
    pass: process.env.EMAIL_PASSWORD,
  },
});



export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, company, message } = req.body ?? {};
  
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email format" });
  }

  try {
    console.log(`Processing contact form from ${name} (${email})`);

    // Send both emails in parallel using Promise.all
    const [businessEmailResult, clientEmailResult] = await Promise.all([
      // Email to your business
      transporter.sendMail({
        from: '"FastIO" <business@fastio.in>',
        to: "business@fastio.in",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #06B6D4;">${email}</a></p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              
              <div style="margin-top: 20px;">
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B5CF6;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #8B5CF6, #06B6D4); padding: 15px; border-radius: 8px; color: white; text-align: center; margin-top: 30px;">
              <p style="margin: 0; font-size: 14px;">Reply directly to respond to ${name}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 12px; text-align: center;">
              Sent from FastIO contact form - ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        replyTo: email,
      }),

      // Auto-reply to client
      transporter.sendMail({
        from: '"FastIO" <business@fastio.in>',
        to: email,
        subject: "Thanks for reaching out to FastIO!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 20px 0; background: linear-gradient(135deg, #8B5CF6, #06B6D4); color: white; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">FastIO</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">We forge ideas into world-class software</p>
            </div>
            
            <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1e293b; margin-top: 0;">Hi ${name}!</h2>
              
              <p>Thanks for getting in touch! We've received your message and will get back to you within 24 hours.</p>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0; font-weight: 600; color: #475569;">Your message:</p>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #06B6D4;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <p>Best regards,<br>
              <strong style="color: #8B5CF6;">The FastIO Team</strong></p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <div style="text-align: center; color: #64748b; font-size: 14px;">
                <p style="margin: 0;">business@fastio.in</p>
                <p style="margin: 5px 0 0 0; font-size: 12px;">
                  This is an automated response. Please don't reply to this email.
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    ]);

    console.log(`Emails sent successfully:`, {
      businessMessageId: businessEmailResult.messageId,
      clientMessageId: clientEmailResult.messageId,
    });

    return res.json({ ok: true });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ 
      ok: false, 
      error: "Failed to send email. Please email us directly at business@fastio.in" 
    });
  }
};