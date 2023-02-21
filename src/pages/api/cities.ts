import { NextApiRequest, NextApiResponse } from 'next';
import cities from 'service/mock/cities.json';

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(cities);
}

export default handler;
