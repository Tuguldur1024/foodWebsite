"use client";

import { UpdateUserProfile } from "@/components/profile/UpdateUserProfile";
import { useAuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  useremail: string;
  userphone: number;
  username: string;
};
const UpdateProfile = () => {
  const [userData, setUserData] = useState<User>();
  const { currentUser, isLoading } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser && !isLoading) return router.push("/auth/signIn");
  }, [currentUser, router, isLoading]);
  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await axios.get<User>(
          `${process.env.NEXT_PUBLIC_MONGODB_URI}/users/${currentUser.userid}`
        );
        console.log(response.data.users[0]);
        setUserData(response.data.users[0]);
      } catch (error) {
        console.log(error);
      }
    };
    userProfile();
  }, [currentUser]);

  return (
    <UpdateUserProfile
      useremail={userData?.email}
      username={userData?.firstName}
      userphone={userData?.phone}
    />
  );
};

export default UpdateProfile;
