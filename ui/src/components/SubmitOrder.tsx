"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { SubmitOrderItems } from "./SubmitOrderItem";
import { useItemProvider } from "@/providers/CardProvider";
import { ScrollArea } from "./ui/scroll-area";

type SubmitProps = {
  onClick: () => void;
  orderItems: [{ foodName: string; amount: string; porch: string }];
};

export const SubmitOrder = ({ onClick, orderItems }: SubmitProps) => {
  const [focus, setFocus] = useState(true);
  const { foodItems } = useItemProvider();

  const totalAmount = foodItems?.reduce((acc, curr) => {
    return curr.foodItem?.price * curr.quantity + acc;
  }, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex  items-center gap-4 px-6 py-4">
        <Image alt="img" width={48} height={48} src="/Radio.png" />
        <div className="flex flex-col ">
          <p className="text-gray-500 text-[14px] font-normal">Алхам 2</p>
          <p className="text-[20px] font-normal">Захиалга баталгаажуулах</p>
          <p className="text-base font-normal text-blue-500">Хүлээгдэж байна</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[612px] p-6 rounded-lg border border-gray-100 ">
        <ScrollArea className="h-fit w-fit  ">
          <div className=" flex  flex-col gap-4">
            {orderItems.map((orderItem, index) => {
              return (
                <SubmitOrderItems
                  key={index}
                  foodname={orderItem.foodItem?.name}
                  amount={orderItem.foodItem?.price}
                  porch={orderItem.foodItem?.porch}
                />
              );
            })}
          </div>
        </ScrollArea>
        <div className="flex flex-row  items-center justify-between content-between">
          <div className="left-0 items-center">
            <p className="text-gray-600 text-[18px] font-normal">
              Нийт төлөх дүн
            </p>
            <p className="font-bold text-lg">{totalAmount}</p>
          </div>

          <Button
            onClick={onClick}
            className=" bg-gray-100 text-gray-500 w-[187px]"
            type="submit"
            onFocus={() => setFocus(false)}
            onBlur={() => setFocus(true)}
            style={{
              backgroundColor: focus === false ? "#18BA51" : "#EEEFF2",
            }}
          >
            Захиалах
          </Button>
        </div>
      </div>
    </div>
  );
};
