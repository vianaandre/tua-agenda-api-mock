import { NextApiRequest, NextApiResponse } from 'next';
import categories from 'service/mock/categories.json';

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(categories);
}

export default handler;
