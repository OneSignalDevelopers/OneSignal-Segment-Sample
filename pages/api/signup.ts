import Segment from "analytics-node";
import type { NextApiRequest, NextApiResponse } from "next";
import { SegmentWriteKey } from "../../common/constants";
import { UserSignupInfo } from "../../common/types";
import {
  exists as userExists,
  insert as insertUser,
} from "../../common/utils/fake-user-store";

type SignupResponse = { userId: number } | { error: string };

const segment = new Segment(SegmentWriteKey);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>
) {
  const { email } = req.body as UserSignupInfo;
  if (!email) return res.status(422).json({ error: "Email is required." });
  if (userExists(email))
    return res
      .status(422)
      .json({ error: `User with email ${email} already exists.` });

  const userId = insertUser(email);
  segment.track(
    {
      userId: userId,
      event: "Signup",
      properties: {
        email,
      },
    },
    err => err && console.error(err)
  );

  return res.status(200).json({ userId });
}
