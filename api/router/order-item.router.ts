import express from "express";
import {
  createOrderItem,
  getOrderItemById,
  getOrderItems,
  updateOrderItem,
} from "../controller/order-item";
import { deleteOrder } from "../controller/order-item/delete-order-item";

export const orderItemRouter = express.Router();

orderItemRouter.post("/", createOrderItem);
orderItemRouter.get("/", getOrderItems);
orderItemRouter.get("/oneItem", getOrderItemById);
orderItemRouter.put("/", updateOrderItem);
orderItemRouter.delete("/:id", deleteOrder);
