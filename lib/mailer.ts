import nodemailer from "nodemailer";
import User from "./models/users";
import bcrypt from "bcrypt";

interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: SendEmailParams) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "c5b3efd3546eed",
        pass: "ef1d414038ed9a",
      },
    });

    const mailOptions = {
      from: "hitesh@hitesh.ai",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your emaiil" : "Reset your password",
      html: `<p> Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"> here </a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser.<br> 
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.log(String(error));
      throw new Error(String(error));
    }
  }
};