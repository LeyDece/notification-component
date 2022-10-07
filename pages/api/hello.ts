// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { getNotifications } from "../../lib/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const notifications = getNotifications();
  res.status(200).json(notifications)
}
