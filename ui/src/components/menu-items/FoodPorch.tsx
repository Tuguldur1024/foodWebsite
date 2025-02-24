"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useItemProvider } from "@/providers/CardProvider";
type FoodPorchProps = {
 
  foodItem: { name: string; price: string; image: string;_id: string, ingredient:string, categoryId:string};
};

export const FoodPorch: React.FC<FoodPorchProps> = ({ foodItem }) => {
  const [order, setOrder] = useState(0);
  const { addToCart, addToFood } = useItemProvider();
  const orderPlus = () => {
    setOrder(order + 1);
  };

  const orderMinus = () => {
    if (order >= 1) setOrder(order - 1);
  };

  const handleAddtoCard = () => {
    if (order > 0) {
      const orderItems = {
        foodItem,
        quantity: order,
      };
      const orderItem = {
        foodId: foodItem._id,
        quantity: order,
      };
      addToCart(orderItems);
      setOrder(1);
      addToFood(orderItem);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border-none bg-none">{foodItem.name}</div>
      </DialogTrigger>
      <DialogContent className="flex flex-row items-center p-8 gap-8">
        <div style={{backgroundImage:`url("${foodItem.image}"`}}  className="w-[500px] h-[500px] bg-cover bg-center "/>
        <div className="flex flex-col w-[384px] h-[398px] gap-8">
          <DialogHeader>
            <DialogTitle>{foodItem.name}</DialogTitle>
            <DialogDescription>{foodItem.price}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl">Орц</p>
            <p className="bg-gray-50 p-2 rounded-sm">
            {foodItem.ingredient}
            </p>
          </div>
          <div className="font-semibold text-xl">Тоо</div>
          <div className="flex justify-between">
            <Button
              onClick={orderMinus}
              type="submit"
              size="sm"
              className="p-4 bg-green-500"
            >
              <Image width={13} height={14} alt="img" src="/minus.png" />
            </Button>
            <p className="mt-1">{order}</p>
            <Button
              onClick={orderPlus}
              type="submit"
              size="sm"
              className="p-4 bg-green-500"
            >
              <Image width={13} height={14} src="/plus.png" alt="img" />
            </Button>
          </div>
          <div className="flex">
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  onClick={handleAddtoCard}
                  type="button"
                  className="bg-green-500 w-[384px]"
                  variant="secondary"
                >
                  Сагслах
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
