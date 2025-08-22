import { transporter} from "@/lib/mailer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "POST"){
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const { to, subject, text, html } = await req.body;
    await transporter.sendMail({
      to,
      subject,
      text,
      html,
    });
    res.status(200).json({ success: true ,message:'Email sent Successfully'});
  } catch (error:any) {
    console.log(error)
     res.status(500).json({ error: 'Failed to send email' });
  }
}
