import mongoose, { Schema } from "mongoose";
import { Food } from "./food";

export type OrderItem = {
  quantity: Number;
  orderId?: Schema.Types.ObjectId;
  foodId: Schema.Types.ObjectId[] | Food;
  foodName: String;
  createdAt: any;
  updatedAt: any;
};
const OrderItemSchema = new Schema<OrderItem>({
  foodId: { type: Schema.Types.ObjectId, ref: "Food" },
  quantity: { type: Number },
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderItemModel = mongoose.model<OrderItem>("OrderItems", OrderItemSchema);

export default OrderItemModel;
