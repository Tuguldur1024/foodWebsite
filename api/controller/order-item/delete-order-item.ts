import { Request, Response } from "express";
import OrderItemModel from "../../model/order-item";
import mongoose from "mongoose";

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderId = mongoose.Types.ObjectId.createFromHexString(id);

    const deleteorder = await OrderItemModel.deleteOne(
      { _id: orderId },
      { new: true }
    );
    res.json({
      success: true,
      message: "Order deleted successfully",
      deleteorder: deleteorder,
    });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};
