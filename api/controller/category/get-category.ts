import { Request, Response } from "express";
import mongoose from "mongoose";
import CategoryModel from "../../model/category";

export const getCategoryById = async (req: Request, res: Response) => {

  const { id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const category = await CategoryModel.findById({ _id: objectId });

    res.status(200).json({ category: category });

  } catch (error) {
    
    res.status(400).json({ message: error });
  }
};
