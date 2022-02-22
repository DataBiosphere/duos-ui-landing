// api for submission of email

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = process.env.SLACK_URL ?? 'error';
  const email = req.body.email.toLowerCase() ?? 'error';

  const data = JSON.stringify({
    email,
  });

  if (url === 'error' || email === 'error') {
    return res.status(500).json({ success: false });
  }

  try {
    await axios.post(url, data);
  } catch (error) {
    return res.status(500).json({ success: false });
  }

  return res.status(200).json({ success: true });
}
