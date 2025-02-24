import { Request, Response } from "express";
import UserModel from "../../model/user";
import "dotenv";

type CustomRequest = Request & {
  user?: { [key: string]: any; email: string } | undefined;
};

export const me = async (req: CustomRequest, res: Response) => {
  const { user: email } = req;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "not found email" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.send(error);
  }
};
