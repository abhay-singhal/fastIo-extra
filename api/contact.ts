import type { VercelRequest, VercelResponse } from "@vercel/node";

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", "POST");
//     return res.status(405).json({ ok: false, error: "Method Not Allowed" });
//   }

//   const { name, email, company, message } = req.body ?? {};
//   if (!name || !email || !message) {
//     return res.status(400).json({ ok: false, error: "Missing required fields" });
//   }

//   return res.status(200).json({ ok: true });
// }


// import { RequestHandler } from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "business@fastio.in",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email format" });
  }

  try {
    console.log('Processing contact form from:', name, email);
    
    // Verify SMTP connection
    await transporter.verify();
    console.log('✓ SMTP connection verified');
    
    // Send email to business
    const businessResult = await transporter.sendMail({
      from: process.env.EMAIL_USER || "test.chintuu@gmail.com",
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
          
          <p style="color: #64748b; font-size: 12px; text-align: center;">
            Sent from FastIO contact form - ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      replyTo: email,
    });

    // Send auto-reply to client
    const clientResult = await transporter.sendMail({
      from: process.env.EMAIL_USER || "test.chintuu@gmail.com",
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
          </div>
        </div>
      `,
    });

    console.log('✓ Emails sent successfully');
    
    return res.status(200).json({ 
      ok: true,
      messageId: businessResult.messageId 
    });

  } catch (error) {
    console.error('❌ Email error:', error);
    return res.status(500).json({ 
      ok: false, 
      error: "Failed to send email. Please email us directly at business@fastio.in"
    });
  }
}

// export const handleContact: RequestHandler = async (req, res) => {
//   const { name, email, company, message } = req.body ?? {};

//   if (!name || !email || !message) {
//     return res.status(400).json({ ok: false, error: "Missing required fields" });
//   }

//   try {
//     console.log('=== EMAIL DEBUG ===');
//     console.log('From:', name, email);
//     console.log('Message:', message);
    
//     // Test the connection first
//     await transporter.verify();
//     console.log('✓ SMTP connection verified');
    
//     // Send simple test email
//     const result = await transporter.sendMail({
//       from: "test.chintuu@gmail.com",
//       to: "test.chintuu@gmail.com", // Send to yourself first for testing
//       subject: `TEST: Contact from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Company: ${company || 'Not provided'}
//         Message: ${message}
        
//         Sent at: ${new Date().toISOString()}
//       `,
//       html: `
//         <h2>TEST: New Contact Form</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company || 'Not provided'}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//         <p><small>Sent at: ${new Date().toISOString()}</small></p>
//       `
//     });

//     console.log('✓ Email sent successfully');
//     console.log('Message ID:', result.messageId);
//     console.log('Response:', result.response);
    
//     return res.json({ 
//       ok: true, 
//       messageId: result.messageId,
//       debug: true
//     });

//   } catch (err) {
//     console.error('❌ Email failed:', err);
//     return res.status(500).json({ 
//       ok: false, 
//       error: err.message || "Failed to send email",
//       debug: true
//     });
//   }
// };