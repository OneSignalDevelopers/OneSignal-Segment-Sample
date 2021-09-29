// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Segment from "analytics-node";
import type { NextApiRequest, NextApiResponse } from "next";
import { SegmentWriteKey } from "../../common/constants";
import { UserOnboardInfo } from "../../common/types";

const segment = new Segment(SegmentWriteKey);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, name } = req.body as UserOnboardInfo;

  segment.track(
    {
      userId: id,
      event: "Onboarded",
      properties: {
        name,
        onboarding_step: "complete",
      },
    },
    err => err && console.error(err)
  );

  return res.status(200);
}
