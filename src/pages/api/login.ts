import { NextApiRequest, NextApiResponse } from 'next';
import { generateToken } from '../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Dummy user data (Replace with DB authentication)
  const users = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' },
  };

  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = generateToken({ username, role: user.role });

  // Set cookie with JWT token
  res.setHeader('Set-Cookie', `authToken=${token}; HttpOnly; Path=/`);

  return res.status(200).json({ message: 'Login successful', token });
}
