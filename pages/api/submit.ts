// api for submission of email

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import invariant from 'tiny-invariant';

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = process.env.SLACK_URL;
  invariant(url, 'SLACK_URL is not defined');
  
  const email = req.body.email.toLowerCase();
  invariant(email, 'email is not defined');

  try {
    await axios.post(url, JSON.stringify({
      email: email.toLowerCase(),
    }));
  } catch (error) {
    return res.status(500).json({ success: false });
  }

  return res.status(200).json({ success: true });
}
