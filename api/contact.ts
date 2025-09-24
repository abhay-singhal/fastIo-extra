// import type { VercelRequest, VercelResponse } from "@vercel/node";

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


import { RequestHandler } from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test.chintuu@gmail.com",
    pass: "ymlrgtyaumkxnxad",
  },
});

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  try {
    console.log('=== EMAIL DEBUG ===');
    console.log('From:', name, email);
    console.log('Message:', message);
    
    // Test the connection first
    await transporter.verify();
    console.log('✓ SMTP connection verified');
    
    // Send simple test email
    const result = await transporter.sendMail({
      from: "test.chintuu@gmail.com",
      to: "test.chintuu@gmail.com", // Send to yourself first for testing
      subject: `TEST: Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Message: ${message}
        
        Sent at: ${new Date().toISOString()}
      `,
      html: `
        <h2>TEST: New Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><small>Sent at: ${new Date().toISOString()}</small></p>
      `
    });

    console.log('✓ Email sent successfully');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    
    return res.json({ 
      ok: true, 
      messageId: result.messageId,
      debug: true
    });

  } catch (err) {
    console.error('❌ Email failed:', err);
    return res.status(500).json({ 
      ok: false, 
      error: err.message || "Failed to send email",
      debug: true
    });
  }
};