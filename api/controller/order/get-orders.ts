import { Request, Response } from "express";
import OrderModel from "../../model/order";
import mongoose from "mongoose";

export const getOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const orders = await OrderModel.find({ userId: objectId })
      .populate("userId")
      .populate({
        path: "orderItems",
        populate: { path: "foodId" },
      });

    res.json({ orders: orders });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
