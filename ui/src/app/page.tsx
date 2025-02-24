"use client";
import React, { useEffect } from "react";

import { Banner, DeliveryFeatures } from "@/components";
import DessertFiltered from "@/components/menu-items/DessertFiltered";
import DiscountFiltered from "@/components/menu-items/DiscountFiltered";
import MainCourseFiltered from "@/components/menu-items/MainCourseFiltered";
import SidedishFiltered from "@/components/menu-items/Sidedishfiltered";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const { currentUser, isLoading } = useAuthContext();

  useEffect(() => {
    if (!currentUser && !isLoading) {
      router.push("/auth/signIn");
    }
  }, [currentUser, isLoading, router]);

  return (
    <div>
      <Banner />
      <DeliveryFeatures />
      <div className="flex flex-col gap-20">
        <DiscountFiltered />
        <MainCourseFiltered />
        <DessertFiltered />
        <SidedishFiltered />
      </div>
    </div>
  );
};
export default Home;
