import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { memberName } = req.body;

    // Simulate sending email notification
    console.log(`Email sent to info@jbayzebralodge.co.za: New member check-in: ${memberName} at ${new Date().toLocaleTimeString()}`);

    // Simulate sending WhatsApp notification
    console.log(`WhatsApp sent to +27 (0) 78 925 6812: New member check-in: ${memberName} at ${new Date().toLocaleTimeString()}`);

    res.status(200).json({ message: 'Check-in successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
