import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, centreName, message } = req.body;

  if (!firstName || !lastName || !email || !centreName || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    const templatePath = path.join(
      process.cwd(),
      "src/templates/emailTemplate.html"
    );
    const template = fs.readFileSync(templatePath, "utf-8");

    const htmlContent = template
      .replace("{{firstName}}", firstName)
      .replace("{{lastName}}", lastName)
      .replace("{{email}}", email)
      .replace("{{centreName}}", centreName)
      .replace("{{message}}", message);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'Geminihaven3@gmail.com', 
      subject: `New Message from ${firstName} ${lastName}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
};

export default sendEmail;
