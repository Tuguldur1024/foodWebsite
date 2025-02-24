import { Request, Response } from "express";
import UserModel from "../../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../model/user";

export const signinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne<User>({ email });

    if (!user) {
      res.status(400).json({ message: "error not found email" });
      return;
    }

    const isMachedPassword = await bcrypt.compare(password, user.password);

    if (!isMachedPassword) {
      res.status(400).json({ message: "error not found password" });
      return;
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        address: user.address,
      },
      "secret",
      {
        expiresIn: "10h",
      }
    );
    res.json({ user, accessToken });
  } catch (error) {
    res.send(error);
  }
};
