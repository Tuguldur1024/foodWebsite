import mongoose from "mongoose";
import { Request, Response } from "express";
import OrderModel from "../../model/order";

export const updateOrderItem = async (req: Request, res: Response) => {
  const { id, foodId, quantity, amount, orderId } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const orderItem = await OrderModel.findOneAndUpdate(
      { _id: objectId },
      {
        foodId,
        quantity,
        amount,
        orderId,
      },
      { new: true }
    );

    res.status(200).json({ orderItem: orderItem });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
