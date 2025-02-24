"use client";

import Bookmark from "./icons/Bookmark";
import TimeIcon from "./icons/TimeIcon";
import SaladIcon from "./icons/SaladIcon";

type Feature = {
  process: string;
  icon: JSX.Element;
};

export const DeliveryFeatures = () => {
  const features: Feature[] = [
    { process: "Хүргэлтийн төлөв хянах", icon: <Bookmark /> },
    { process: "Шуурхай хүргэлт", icon: <TimeIcon /> },
    { process: "Эрүүл, баталгаат орц", icon: <SaladIcon /> },
    { process: "Хоолны өргөн сонголт", icon: <Bookmark /> },
  ];

  return (
    <div className="container mx-auto flex justify-center p-[120px] ">
      <div className="flex gap-[47px]">
        {features.map((feature, index) => (
          <div
            className="border border-gray flex flex-col gap-[15px] rounded-[16px] p-4 w-[265px] h-[155px]"
            key={index}
          >
            <div className="p-[15px]">{feature.icon}</div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[18px]">{feature.process}</p>
              <p className="font-thin text-[14px] text-gray-400">
                Захиалга бэлтгэлийн явцыг хянах
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
