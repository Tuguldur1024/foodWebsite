"use client";
import React from "react";
import GreenStar from "./icons/GreenStar";
import Image from "next/image";

export const DeliveryZones = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <Image width={1200} src="deliveryMap.svg" alt="icon" />
      </div>
      <div className="flex mt-8 mb-8 flex-row gap-3 ml-[20px] self-start">
        <GreenStar />
        <p className="font-poppins font-bold">Хүргэлтийн бүс дэх хаягууд</p>
      </div>
      <div className="flex space-x-6 border rounded-md mb-7">
        <div className="bg-white shadow-lg rounded-lg p-4 w-full">
          <h2 className="font-semibold mb-2">A бүс</h2>
          <hr className="border-t-2 border-green-500 mb-4" />
          <div className="grid grid-cols-2 gap-y-2">
            <div className="text-gray-700">Нархан хотхон</div>
            <div className="text-gray-700">Нархан хотхон</div>
            <div className="text-gray-700">26-р байр</div>
            <div className="text-gray-700">26-р байр</div>
            <div className="text-gray-700">45-р байр</div>
            <div className="text-gray-700">45-р байр</div>
            <div className="text-gray-700">3-р байр</div>
            <div className="text-gray-700">3-р байр</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 w-full">
          <h2 className="font-semibold mb-2">Б бүс</h2>
          <hr className="border-t-2 border-green-500 mb-4" />
          <div className="grid grid-cols-2 gap-y-2">
            <div className="text-gray-700">Нархан хотхон</div>
            <div className="text-gray-700">Нархан хотхон</div>
            <div className="text-gray-700">26-р байр</div>
            <div className="text-gray-700">26-р байр</div>
            <div className="text-gray-700">45-р байр</div>
            <div className="text-gray-700">45-р байр</div>
            <div className="text-gray-700">3-р байр</div>
            <div className="text-gray-700">3-р байр</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
            <div className="text-gray-700">Хоймор хотхон</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZones;
