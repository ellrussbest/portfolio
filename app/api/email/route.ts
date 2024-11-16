import { createTransport } from "nodemailer";

const transporter = createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const POST = async (req: Request) => {
  const { firstname, lastname, email, phone, message } = await req.json();
  const to = process.env.EMAIL_TO;
  const subject = "Email From Personal Portfolio";
  const msg = `
  I'm ${firstname} ${lastname},
  <br />
  <br />
  Email: ${email}
  <br />
  Phone: ${phone}

  <br/>
  <h2>Message:</h2>
  <p>
  ${message}
  </p>
  `;

  try {
    const res = await transporter.sendMail({ to, subject, html: msg });

    if (res.accepted) {
      return new Response("", { status: 200 });
    } else if (res.rejected) {
      return new Response("", { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return new Response("", { status: 500 });
  }
};
