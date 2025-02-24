"use client";
import { Label } from "@radix-ui/react-label";
import { Input, Textarea } from "./ui";
import React from "react";

type NewsProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const AddNews = ({ onChange, onChangePhone }: NewsProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Нэмэлт мэдээлэл</Label>
        <Textarea
          onChange={(event) => onChange(event)}
          className="border border-gray-100 bg-gray-100 font-normal text-[16px] w-[384px]"
          placeholder="Орц, давхар, орцны код ...."
          id="message"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Утасны дугаар*</Label>
        <Input
          onChange={(event) => onChangePhone(event)}
          className="border border-gray-100 bg-gray-100 font-normal text-[16px] w-[384px]"
          type="email"
          placeholder="Утасны дугаараа оруулна уу"
        />
      </div>
    </div>
  );
};
