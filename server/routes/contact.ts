import { RequestHandler } from "express";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handleContact: RequestHandler = (req, res) => {
  // Extract form data
  const { name, email, message } = req.body as ContactFormData;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please provide all required fields: name, email, and message",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Please provide a valid email address",
    });
  }

  // Log the contact form submission to console
  console.log("=".repeat(50));
  console.log("NEW CONTACT FORM SUBMISSION");
  console.log("=".repeat(50));
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Submitted at: ${new Date().toLocaleString()}`);
  console.log("=".repeat(50));

  // Send success response
  res.status(200).json({
    message:
      "Thank you for your message! We will get back to you as soon as possible.",
    data: {
      name,
      email,
      submittedAt: new Date().toISOString(),
    },
  });
};
