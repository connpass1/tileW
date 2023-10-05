import { NextApiRequest, NextApiResponse } from 'next'
 

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse 
) {
  return res.status(200).json({time: Date.now()})
}