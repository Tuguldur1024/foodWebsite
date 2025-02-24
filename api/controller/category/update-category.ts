import mongoose from "mongoose";
import { Request, Response } from "express";
import CategoryModel from "../../model/category";

export const updateCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const category = await CategoryModel.findOneAndUpdate(
      { _id: objectId },
      {
        name,
      },
      { new: true }
    );

    res.status(200).json({ category });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
