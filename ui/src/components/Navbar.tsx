"use client";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import PineLogo from "./icons/Pinelogo";
import Link from "next/link";
import { UserBucket } from "./profile/UserBucket";
import Signin from "@/app/auth/signIn/page";
import Image from "next/image";
import { useAuthContext } from "@/providers/AuthProvider";
// import { useQueryState } from "nuqs";
export const Header = () => {
  const [showSignin, setShowSignin] = useState(false);
  const { currentUser, isLoading } = useAuthContext();

  // const [search, setSearch] = useQueryState("search");
  const [user, setUser] = useState("Нэвтрэх");
  const handleShowSignin = () => {
    if (!currentUser) return setShowSignin(!showSignin);
  };
  useEffect(() => {
    if (currentUser && !isLoading) return setUser("Хэрэглэгч");
  }, [currentUser, isLoading]);

  return (
    <div className=" flex flex-row justify-between container mx-auto py-2 px-20 ">
      {showSignin && (
        <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-gray-50 ">
          <Signin onCloseModal={handleShowSignin} />
        </div>
      )}
      <div className=" flex  gap-[26px] text-base font-bold items-center">
        <div className="top-2 left-1 w-[41px] h-[41px] flex items-center ">
          <PineLogo />
        </div>
        <div className="flex">
          <Link href={"/"}>
            <div className="hover:text-green-500  text-[16px] px-4 py-4">
              НҮҮР
            </div>
          </Link>
          <Link href={"/menu"}>
            <div className="hover:text-green-500 text-[16px] px-4 py-4">
              ХООЛНЫ ЦЭС
            </div>
          </Link>
          <Link href={"/delivery-zones"}>
            <div className="hover:text-green-500 text-[16px] px-4 py-4">
              ХҮРГЭЛТИЙН БҮС
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="form-control relative">
          <Search className="absolute top-3 right-4 w-[17px] h-[17px]" />
          <Input
            className="w-[260px] px-6 py-2 border border-black"
            placeholder="Хайх"
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-14">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex flex-row gap-4 items-center"
            >
              <div className=" rounded-full ">
                <ShoppingCart />
              </div>
              <div>
                <UserBucket />
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            {" "}
            <Link href={"/user-profile"}>
              <div
                tabIndex={0}
                role="button"
                className="  flex flex-row items-center gap-4"
              >
                <div className="w-10 rounded-full">
                  <Image
                    className="rounded-3xl"
                    width={500}
                    height={500}
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="image"
                  />
                </div>
                <div
                  onClick={handleShowSignin}
                  className="hover:text-green-500 font-bold"
                >
                  {user}
                </div>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
