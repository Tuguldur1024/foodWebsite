"use client";
import Image from "next/image";
import Link from "next/link";
import { TbHttpDelete } from "react-icons/tb";
import { Button } from "./ui/button";
import { useItemProvider } from "@/providers/CardProvider";


type OrderDetailProps = {
  price: number;
  onClick: () => void;
  order: string;
  name:string;
  ingredient:string,
  foodId:string,
  image:string,
  quantity:number
};


export const OrderDetail = ({ price, onClick,  name, image, ingredient ,quantity,foodId }: OrderDetailProps) => {
  const {incrementFoodQuantity, decrementFoodQuantity}=useItemProvider()
  const onIncrementFoodQuantity=()=>{
    incrementFoodQuantity(foodId)
  }
  const onDecrementFoodQuantity=()=>{
    decrementFoodQuantity(foodId)
  }
  const totalAmount=quantity* price
  return (
    <div className="flex items-center gap-4 p-4 w-[538px] h-[230px] border border-x-0 border-gray-200">
      <Link href="/order">
        <div style={{backgroundImage:`url("${image}"`}}  className="w-[245px] h-[150px] bg-cover bg-center"  />
      </Link>
      <div className="flex flex-col gap-2 w-[245px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-green-500 font-semibold">{totalAmount}</p>
          </div>
          <div className="p-1 mt-3">
            <TbHttpDelete onClick={onClick} className="w-[25px] h-[25px]" />
          </div>
        </div>
        <p className="text-gray-500 font-normal">
          {ingredient}
        </p>
        <div className="flex gap-2">
          <Button onClick={onIncrementFoodQuantity} type="submit" size="sm" className="p-4 bg-green-500">
            <Image alt="img" src="/plus.png" width={10} height={10} />
          </Button>
          <p className="mt-1">{quantity}</p>
          <Button onClick={onDecrementFoodQuantity} type="submit" size="sm" className="p-4 bg-green-500">
            <Image alt="img" src="/minus.png" width={10} height={10} />
          </Button>
        </div>
      </div>
    </div>
  );
};
