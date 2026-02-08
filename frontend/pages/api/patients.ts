import type { NextApiRequest, NextApiResponse } from 'next';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/v1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.query ? String(req.query.query) : '';
  const response = await fetch(`${backendUrl}/patients?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: req.headers.authorization || '',
    },
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
