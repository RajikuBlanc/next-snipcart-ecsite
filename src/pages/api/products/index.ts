import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../../data/productData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
