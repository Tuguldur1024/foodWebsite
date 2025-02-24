import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  const { _id, email, phoneNumber } = req.body;
  console.log(req.body);
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(_id);

    const user = await UserModel.findOneAndUpdate(
      { _id: objectId },
      { email, phoneNumber },
      { new: true }
    );
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
