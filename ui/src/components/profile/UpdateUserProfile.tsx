"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
type userinfo = {
  username: string;
  useremail: string;
  userphone?: string;
};
type NewUser = {
  phoneNumber: string;
  _id: string;
  userid: string;
};
export const UpdateUserProfile: React.FC<userinfo> = ({
  username,
  useremail,
  userphone,
}) => {
  const [name, setName] = useState(username);
  const [email, setEmail] = useState(useremail);
  const [phone, setPhone] = useState(userphone);
  const { currentUser } = useAuthContext();
  const router = useRouter();
  const updateProfile = async () => {
    try {
      const response = await axios.post<NewUser>(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/users/update`,
        { _id: currentUser.userid, email: "email", phoneNumber: "phone" }
      );
      console.log(response);
      // if (response.data.users)
      //   return (
      //     router.push("/userProfile"),
      //     toast({ title: " tanii medeelel amjilttai shinechlegdlee" })
      //   );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen gap-[28px] items-center ">
      <div className="flex flex-col gap-[40px] relative">
        <Avatar className="w-[120px] h-[120px]">
          <Image alt="img" width={200} height={200} src="/Photo.png" />
        </Avatar>
        <div className="w-8 h-8 z-10 rounded-full border  border-gray-200 bg-gray-50 absolute top-20 right-4 flex items-center justify-center ">
          <Image
            alt="img"
            width={50}
            height={50}
            src="/user-profile-edit-icon.png"
          />
        </div>
        <p className="text-black font-semibold text-[28px] text-center">
          {username}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-[392px] h-[64px] rounded-md  bg-gray-100">
          <p className="text-gray-500 text-[12px] font-poppins ml-20 mt-3 z-10">
            Таны нэр
          </p>
          <div className="w-10 h-10 z-10 rounded-full bg-white absolute top-3 left-7 flex items-center justify-center">
            <CgProfile className="w-[20px] h-[20px]"></CgProfile>
          </div>
          <input
            placeholder={username}
            onChange={(e) => setName(e.target.value)}
            className=" z-0 border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px] "
          />
          <div className="absolute top-5 right-6 w-[18px] h-[18px]">
            <Image
              width={200}
              height={200}
              alt="img"
              src="/user-profile-edit-icon.png"
            />
          </div>
        </div>
        <div className="relative  w-[392px] h-[64px] bg-gray-100 rounded-md ">
          <p className="text-gray-500 text-[12px] font-poppins ml-20 mt-3 z-10">
            Утасны дугаар
          </p>
          <div className="w-10 h-10 z-10 rounded-full bg-white absolute top-3 left-7 flex items-center justify-center">
            <MdOutlineCall className="w-[18px] h-[18px]" />
          </div>
          <input
            placeholder={userphone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px]"
          />
          <div className="absolute top-5 right-6 w-[18px] h-[18px]">
            <Image
              width={200}
              height={200}
              alt="img"
              src="/user-profile-edit-icon.png"
            />
          </div>
        </div>
        <div className="relative w-[392px] h-[64px] bg-gray-100 rounded-md ">
          <p className="text-gray-500 text-[12px] font-poppins ml-20 mt-3 z-10">
            Имайл хаяг
          </p>
          <div className="w-10 h-10 z-10 rounded-full bg-white absolute top-3 left-7 flex items-center justify-center">
            <AiTwotoneMail className="w-[16px] h-[16px]" />
          </div>
          <input
            placeholder={useremail}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px]"
          />
          <div className="absolute top-5 right-6 w-[18px] h-[18px]">
            <Image
              alt="img"
              width={200}
              height={200}
              src="/user-profile-edit-icon.png"
            />
          </div>
        </div>
      </div>
      <Button className="bg-green-500 w-[392px]" onClick={updateProfile}>
        Хадгалах
      </Button>
    </div>
  );
};
