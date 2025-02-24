import mongoose from "mongoose";
import { Request, Response } from "express";
import UserModel from "../../model/user";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, firstName, password, phoneNumber, role, address } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await new UserModel({
      email: email,
      firstName: firstName,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      role: role,
      address: address,
    }).save();
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
