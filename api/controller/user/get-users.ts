import { Request, Response } from "express";
import UserModel from "../../model/user";
import mongoose from "mongoose";

export const getUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const users = await UserModel.find({ _id: id });
    res.json({ users: users });
  } catch (error) {
    res.json({ message: error });
  }
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const user = await UserModel.findById({ _id: objectId });
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
