"use client";

import { AddressSelected } from "@/components/AddressSelect";
import { SubmitOrder } from "@/components/SubmitOrder";
import { toast } from "@/hooks/use-toast";
import { useAuthContext } from "@/providers/AuthProvider";
import { useItemProvider } from "@/providers/CardProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const [phone, setPhone] = useState("");
  const [addNews, setAddnews] = useState("");
  const [userDistrict, setUserDistrict] = useState("");
  const [userCommittee, setUserCommittee] = useState("");
  const [userHousing, setUserHousing] = useState("");
  const { currentUser, isLoading } = useAuthContext();
  const { foodIds, foodItems, setFoodIds, setFoodItems } = useItemProvider();
  const router = useRouter();

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(event.target.value);
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddnews(event.target.value);
  };

  useEffect(() => {
    if (!currentUser && isLoading) return router.push("/auth/signIn");
  }, [currentUser, isLoading, router]);

  const orderSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/order`,
        {
          userId: currentUser,
          orderStatus: "Ordered",
          district: userDistrict,
          Khoroo: userCommittee,
          Apartment: userHousing,
          orderItems: foodIds,
        }
      );
      if (response.data.message) {
        toast({
          description: "Tanii zahialgad aldaa garlaa! Dahin oroldnuu",
        });
      }
      if (response.data.order) {
        toast({
          description: "Захиалга амжилттай хийгдлээ .",
        });
        setFoodItems([]);
        setFoodIds([]);
        router.push("/orderProcess");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(foodIds);
  return (
    <div className="flex justify-evenly h-screen gap-[48px] items-center">
      <AddressSelected
        onChange={onChange}
        onChangePhone={onChangePhone}
        onChangeDistrict={(e) => setUserDistrict(e.target.value)}
        onChangeCommittee={(e) => setUserCommittee(e.target.value)}
        onChangeHousing={(e) => setUserHousing(e.target.value)}
      />
      <SubmitOrder onClick={orderSubmit} orderItems={foodItems} />
    </div>
  );
};

export default Home;
