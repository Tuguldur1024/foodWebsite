import { Request, Response } from "express";
import CategoryModel from "../../model/category";

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await new CategoryModel({
      name: name,
    }).save();

    res.status(200).json({ category: category });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
