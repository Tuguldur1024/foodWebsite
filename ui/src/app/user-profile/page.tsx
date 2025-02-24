"use client";
import { UserProfile } from "@/components/profile/UserProfileInfo";
import { useAuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

type User = {
  useremail: string;
  userphone: number;
  username: string;
};
const UserProfileInfo = () => {
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
        setUserData(response.data.users[0]);
      } catch (error) {
        console.log(error);
      }
    };
    userProfile();
  }, [currentUser]);

  console.log(userData);
  return (
    <UserProfile
      useremail={userData?.email}
      username={userData?.firstName}
      userphone={userData?.phone}
    />
  );
};

export default UserProfileInfo;
