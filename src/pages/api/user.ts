import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userData = verifyToken(token);

  if (!userData) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return res.status(200).json(userData);
}
