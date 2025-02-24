"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type contexttype = {
  currentUser: null | string;
  isLoading: boolean;
  signin: (_userid: string) => void;
};

const AuthContext = createContext<contexttype>({
  currentUser: null,
  isLoading: false,
  signin: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parseduser = JSON.parse(user);
      setCurrentUser(parseduser);
    }
    setIsLoading(false);
  }, [isLoading]);

  const signin = async (userid: string) => {
    localStorage.setItem("user", JSON.stringify({ userid }));
    setCurrentUser(userid);
    setIsLoading(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isLoading, currentUser, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
