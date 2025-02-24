"use client";
import React from "react";
import { Button } from "../ui/button";
type SignupCheckProps = {
  style?: React.CSSProperties; 
};
const SignupCheck:React.FC<SignupCheckProps> = ({style}) => {
  return (
    <div className="text-center flex flex-col gap-[32px] ">
    <div className="flex flex-row  gap-5">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">Үйлчилгээний нөхцөл зөвшөөрөх</label>
    </div>
    <Button
              className="w-[384px] h-[48px] border-green-600"
              variant="outline"
              type="submit"
              style={style}
            >
              Бүртгүүлэх
            </Button></div>
  );
};

export default SignupCheck;
