"use client";
import { Avatar } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { IoTimeSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export type userProfileProps = {
  username: string;
  userphone: string;
  useremail: string;
};

export const UserProfile: React.FC<userProfileProps> = ({
  useremail,
  username,
  userphone,
}) => {
  const logOut = () => {};
  const previousOrder = () => {};

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
            onChange={(e) => e.target.value}
            className=" z-0 border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px] "
          />
          <Link href={"/update-profile"}>
            <div className="absolute top-5 right-6 w-[18px] h-[18px]">
              <Image
                alt="img"
                width={200}
                height={200}
                src="/user-profile-edit-icon.png"
              />
            </div>
          </Link>
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
            onChange={(e) => e.target.value}
            className="border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px]"
          />
          <Link href={"/update-profile"}>
            <div className="absolute top-5 right-6 w-[18px] h-[18px]">
              <Image
                width={200}
                height={200}
                alt="img"
                src="/user-profile-edit-icon.png"
              />
            </div>
          </Link>
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
            onChange={(e) => e.target.value}
            className="border-none  absolute bottom-2 right-12 bg-gray-100 w-[264px] h-[25px]"
          />
          <Link href={"/update-profile"}>
            <div className="absolute top-5 right-6 w-[18px] h-[18px]">
              <Image
                width={200}
                height={200}
                alt="img"
                src="/user-profile-edit-icon.png"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <Link href={"/order-process"}>
            <button
              onClick={previousOrder}
              className="border-none bg-white text-black flex flex-row items-center mt-2 ml-5  "
            >
              <div className="w-12 h-12 z-10 rounded-full border top-2 mr-5 flex items-center justify-center">
                <IoTimeSharp className="w-[30px] h-[21px]" />
              </div>
              Захиалгын түүх
            </button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="border-none bg-none flex flex-row  items-center mt-2 ml-5">
                <div className="w-12 h-12 z-10 rounded-full border top-2 mr-5 flex items-center justify-center">
                  <LuLogOut className="w-[21px] h-[21px]" />
                </div>
                Гарах
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Та системээс гарахдаа итгэлтэй байна уу?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={logOut}>Тийм</AlertDialogCancel>
                <AlertDialogAction>Үгүй</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
