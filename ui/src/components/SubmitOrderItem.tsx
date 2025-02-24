"use client";

import Image from "next/image";

type OrderItemProps = {
  foodname: string;
  amount: string;
  porch: string;
};

export const SubmitOrderItems = ({
  foodname,
  amount,
  porch,
}: OrderItemProps) => {
  return (
    <div className="flex items-center gap-4 w-[384px] h-[153px] border border-x-0 border-gray-200">
      <Image alt="img" height={121} width={184} src="/orderPizza.png" />
      <div className="flex flex-col gap-2 w-[245px]">
        <div className="flex flex-col ">
          <p className="font-bold text-lg">{foodname}</p>
          <p className="text-green-500 font-semibold">{amount}</p>
        </div>
        <p className="text-gray-500 font-normal ">{porch}</p>
      </div>
    </div>
  );
};
