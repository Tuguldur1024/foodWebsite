import { Request, Response } from "express";
import OrderModel from "../../model/order";
import mongoose from "mongoose";
import OrderItemModel, { OrderItem } from "../../model/order-item";
import { Food } from "../../model/food";
import currency from "currency.js";

type OrderItemWithFood = OrderItem & { foodId: Food };

export const createOrder = async (req: Request, res: Response) => {
  const { userId, orderStatus, district, Khoroo, Apartment, orderItems } =
    req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(userId.userid);
    const newOrderItems = await OrderItemModel.insertMany(orderItems);
    console.log(newOrderItems);

    const populatedOrderItems = await OrderItemModel.find<OrderItemWithFood>({
      _id: { $in: newOrderItems.map((item) => item._id) },
    }).populate("foodId");

    const totalPrice = populatedOrderItems.reduce((acc, curr) => {
      return currency(curr.foodId.price).multiply(`${curr.quantity}`).add(acc)
        .value;
    }, 0);

    console.log({ populatedOrderItems });
    const newOrderItemIds = newOrderItems.map(
      (newOrderItem) => newOrderItem._id
    );

    const newOrder = await OrderModel.create({
      userId: objectId,
      totalPrice: totalPrice,
      orderStatus: orderStatus,
      district: district,
      Khoroo: Khoroo,
      Apartment: Apartment,
      orderItems: newOrderItemIds,
    });

    const order = await OrderModel.findById(newOrder._id)
      .populate("userId")
      .populate({
        path: "orderItems",
        populate: { path: "foodId" },
      });

    res.json({ order: order });
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
};
