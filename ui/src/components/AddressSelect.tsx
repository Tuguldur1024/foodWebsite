"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Payment } from "./Payment";
import { AddNews } from "./AddNews";

type AddressProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDistrict: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeCommittee: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeHousing: (e: React.ChangeEvent<HTMLSelectElement>) => void;

};
export const AddressSelected = ({
  onChange,
  onChangePhone,
  onChangeDistrict,
  onChangeCommittee,
  onChangeHousing,
}: AddressProps) => {
  const [district, setDistrict] = useState<boolean>(true);
  const [committee, setCommittee] = React.useState(true);
  const [housing, setHousing] = React.useState(true);

  return (
    <div className="z-50 flex flex-col gap-6 ">
      <div className="flex  items-center gap-4 px-6 py-4">
        <Image alt="img" width={48} height={48} src="/Radio.png" />
        <div className="flex flex-col ">
          <p className="text-gray-500 text-[14px] font-normal">Алхам 1</p>
          <p className="text-[20px] font-normal">Хаягийн мэдээлэл оруулах</p>
          <p className="text-base font-normal text-blue-500">Хүлээгдэж байна</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-6 rounded-md border border-gray-100 h-[612px] w-[432px]">
        <div className="flex flex-col gap-4">
          <div>Хаяг аа оруулна уу</div>
          <div
            onFocus={() => setDistrict(false)}
            style={{ backgroundColor: district ? "" : "#18BA51" }}
            className="rounded-sm border border-gray-200 bg-gray-50 w-[384px] flex gap-3"
          >
            <Image
              alt="img"
              width={16}
              height={20}
              className="h-5 z-20 mt-3 ml-4"
              src="/location_on.png"
            />
            <select
              onFocus={() => setDistrict(false)}
              style={{ backgroundColor: district ? "" : "#18BA51" }}
              className={`w-[320px] h-[48px]  bg-gray-50 ${
                district ? "text-gray-400" : "text-white"
              }  `}
              onChange={onChangeDistrict}
            >
              <option
                className="ml-4 font-normal text-[16px] text-gray-200"
                defaultValue={"readonly"}
              >
                Дүүрэг сонгоно уу?
              </option>
              <option value={"Баянгол"}>Баянгол</option>
              <option value={"Баянзүрх"}>Баянзүрх</option>
              <option value={"ХанУул"}>ХанУул</option>
              <option value={"Баянгол"}>Сонгино-Хайрхан</option>
              <option value={"Баянгол"}>Чингэлтэй</option>
              <option value={"Баянгол"}>Налайх</option>
              <option value={"Баянгол"}>Баянгол</option>
            </select>
          </div>
          <div
            onFocus={() => setCommittee(false)}
            style={{ backgroundColor: committee ? "" : "#18BA51" }}
            className="rounded-sm border border-gray-200 bg-gray-50 w-[384px] flex gap-3"
          >
            <Image
              alt="img"
              className="h-5 z-20 mt-3 ml-4"
              src="/location_on.png"
              width={16}
              height={20}
            />
            <select
              onFocus={() => setCommittee(false)}
              style={{ backgroundColor: committee ? "" : "#18BA51" }}
              className={`w-[320px] h-[48px] border-none bg-gray-50 ${
                committee ? "text-gray-400" : "text-white"
              }  `}
              onChange={onChangeCommittee}
            >
              <option
                className="ml-4 font-normal text-[16px]"
                defaultValue={"readonly"}
              >
                Хороо сонгоно уу
              </option>
              <option value={"1-хороо"}>1-хороо</option>
              <option value={"2-хороо"}>2-хороо</option>
              <option value={"3-хороо"}>3-хороо</option>
              <option value={"4-хороо"}>4-хороо</option>
              <option value={"5-хороо"}>5-хороо</option>
              <option value={"6-хороо"}>6-хороо</option>
              <option value={"7-хороо"}>7-хороо</option>
            </select>
          </div>
          <div
            onFocus={() => setHousing(false)}
            style={{ backgroundColor: housing ? "" : "#18BA51" }}
            className="rounded-sm border border-gray-200 bg-gray-50 w-[384px] flex gap-3"
          >
            <Image
              alt="img"
              className="h-5 z-20 mt-3 ml-4"
              src="/location_on.png"
              width={16}
              height={20}
            />
            <select
              onFocus={() => setHousing(false)}
              style={{ backgroundColor: housing ? "" : "#18BA51" }}
              className={`w-[320px] h-[48px]  bg-gray-50 ${
                housing ? "text-gray-400" : "text-white"
              } `}
              onChange={onChangeHousing}
            >
              <option
                className="ml-4 font-normal text-[16px]"
                defaultValue={"readonly"}
              >
                Байр, гудамж сонгоно уу
              </option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
              <option value={"1-Байр"}>1-Байр</option>
            </select>
          </div>
        </div>
        <AddNews onChange={onChange} onChangePhone={onChangePhone} />
        <Payment />
      </div>
    </div>
  );
};
