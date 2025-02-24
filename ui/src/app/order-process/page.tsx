"use client";
import { OrderHistory } from "@/components/OrderHistory";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const Page = () => {
  const { currentUser, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser && !isLoading) router.push("/auth/signIn");
  }, [currentUser, isLoading, router]);

  return (
    <div className="">
      <OrderHistory />
    </div>
  );
};
export default Page;
