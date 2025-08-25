import { transporter} from "@/lib/mailer";
import { NextApiRequest, NextApiResponse } from "next";

interface EmailRequestBody {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "POST"){
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const { to, subject, text, html }: EmailRequestBody = await req.body;
    await transporter.sendMail({
      to,
      subject,
      text,
      html,
    });
    res.status(200).json({ success: true ,message:'Email sent Successfully'});
  } catch (error) {
    console.log(error)
     res.status(500).json({ error: 'Failed to send email' });
  }
}
