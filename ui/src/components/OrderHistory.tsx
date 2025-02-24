"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { useItemProvider } from "@/providers/CardProvider";
import axios from "axios";

import Image from "next/image";
import { useEffect, useState } from "react";

type OrderItem = {
  quantity: string;
  name: string;
};
type Order = {
  orderItems: OrderItem[];
  updatedDate: string;
  Apartmant: string;
  district: string;
  Khoroo: string;
};
type Food = {
  fooditem: Order[];
};

export const OrderHistory = () => {
  const { currentUser } = useAuthContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderWait, setOrderWait] = useState("Хүлээгдэж буй");
  const [orderSuccess, setOrderSuccess] = useState("Амжилттай");
  const { foodItems } = useItemProvider();
  if (!foodItems) return setOrderWait("Хүлээгдэж буй");
  useEffect(() => {
    if (currentUser) {
      const orderInfo = async () => {
        try {
          const response = await axios.get<{ response: Food[] }>(
            `http://localhost:5050/order/${currentUser.userid}`
          );

          setOrders(response.data.orders);
        } catch (error) {
          console.error(error);
        }
      };
      orderInfo();
    }
  }, [currentUser]);
  console.log(orders);
  return (
    <div className="flex justify-around my-48 ">
      <div className=" bg-white border border-gray-50 h-[696px] rounded-[16px]">
        <div className="flex flex-col gap-4 p-6  ">
          <div className="text-[20px] font-normal">Захиалгын түүх</div>
          {orders.map((order) => {
            return (
              <div className="flex  items-center gap-4 p-4 border border-x-0 border-t-0 border-gray-400 w-[384px]">
                <Image
                  alt="img"
                  width={48}
                  height={48}
                  src="/OrderSuccessful.svg"
                />
                <div className="flex flex-col w-[198px] ">
                  <p className="text-[16px] font-normal"> Захиалга</p>
                  <p className="text-base font-normal text-blue-500">
                    {orderSuccess}
                  </p>
                </div>
                <div>{order.updatedDate}</div>
              </div>
            );
          })}
          <div className="flex  items-center gap-4 p-4 border border-x-0 border-t-0 border-gray-400 w-[384px]">
            <Image alt="img" width={48} height={48} src="/Radio.png" />
            <div className="flex flex-col w-[198px] ">
              <p className="text-[16px] font-normal"> Захиалга</p>
              <p className="text-base font-normal text-blue-500">{orderWait}</p>
            </div>
            <div>{2020 / 2 / 23}</div>
          </div>
        </div>
      </div>
      <div className=" bg-white border border-gray-50 h-[696px] w-[432px] rounded-[16px]">
        <div className="flex flex-col gap-4 p-6 ">
          <div className="text-[20px] font-normal">Захиалгын дэлгэрэнгүй</div>
          {orders.length > 0 ? (
            orders.map((order, index) => {
              return (
                <div
                  key={index}
                  className="flex w-[384px] items-center justify-between gap-4 p-4 border border-x-0 border-t-0 border-gray-400"
                >
                  <p className="text-[16px] font-normal">{order.Khoroo}</p>
                  <div>{order.Apartment}</div>
                  <div>{order.district}</div>
                </div>
              );
            })
          ) : (
            <p>no orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
