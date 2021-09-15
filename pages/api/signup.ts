// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Segment from "analytics-node";
import { SegmentWriteKey } from "../../common/constants";
import { User, UserSignupInfo } from "../../common/types";

const segment = new Segment(SegmentWriteKey);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ id: string } | { error: string }>
) {
  const { email } = req.body as UserSignupInfo;
  if (!email) return res.status(422).json({ error: "name is required" });
  // logic that creates a new user...
  const id = "123";
  segment.track(
    {
      userId: id,
      event: "Signup",
      properties: {
        email,
        test: "test",
      },
    },
    err => err && console.error(err)
  );

  return res.status(200).json({ id });
}
