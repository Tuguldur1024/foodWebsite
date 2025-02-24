"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { OrderDetail } from "../OrderDetail";
import axios from "axios";
import React  from "react";
import { useItemProvider } from "@/providers/CardProvider";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export const UserBucket: React.FC = () => {
  const { foodItems,} = useItemProvider();

  const totalAmount = foodItems?.reduce((acc, curr) => {
    return curr.foodItem?.price * curr.quantity + acc;
  }, 0);

  const deleteOrder = async (_id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/orderItems/${_id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const orderToast = () => {
    if (foodItems.length === 0) {
      toast({ title: "Таны захиалга хоосон  байна" });
    }
  };

  const router = useRouter();
  const orderSubmit = () => {
    if (foodItems.length >= 1) return router.push("/order");
    if (foodItems.length === 0) return router.push("/");

  };
 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div onClick={orderToast} className="hover:text-green-500 font-bold">
          Сагс
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <div className="flex flex-row items-center justify-between  my-8 ">
            <SheetClose asChild>
              <FaChevronLeft className="ml-4 w-3 h-5" />
            </SheetClose>
            <SheetTitle>Таны сагс</SheetTitle>
            <p></p>
          </div>
          <ScrollArea className="h-[690px] w-fit ">
            <div>
              {foodItems?.map((orderItem, index) => { 
               
                return (
                  <OrderDetail
                  foodId={orderItem.foodItem._id}
                    order={orderItem.quantity.toString()}
                    onClick={() => deleteOrder(orderItem._id)}
                    key={index}
                    price={orderItem.foodItem.price}
                    ingredient={orderItem.foodItem.ingredient}
                    name={orderItem.foodItem.name}
                    quantity={orderItem.quantity}
                  image={orderItem.foodItem.image}
                  />
                );
              })}
            </div>{" "}
          </ScrollArea>
        </SheetHeader>

        <SheetFooter className="flex flex-row h-[172px] border border-x-0 border-b-0 border-gray-100  items-center justify-between content-between">
          <div className="left-0 w-[256px] items-center">
            <p className="text-gray-600 text-[18px] font-normal">
              Нийт төлөх дүн
            </p>
            <p className="font-bold text-lg">{totalAmount}</p>
          </div>

          <SheetClose asChild>
            <Button onClick={orderSubmit} className="w-[256px] bg-green-500">
              Захиалга
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
