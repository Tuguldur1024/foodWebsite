"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { SignupAddressInput } from "@/components/signup-form/SignupAddressInput";
import { SignupPasswordInput } from "@/components/signup-form/SignupPasswordInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthProvider";
import { toast } from "@/hooks/use-toast";

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  role: "Admin" | "User";
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

const FormSchema = z.object({
  useremail: z.string().email({
    message: "Имайл хаягиа оруулна уу",
  }),
  userpassword: z
    .string()
    .min(5, { message: "5 ба түүнээс дээш тэмдэгттэй байх ёстой" }),
});

const Signin = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const [hidePassword, setHidePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(false);
  const router = useRouter();
  const { currentUser, isLoading, signin } = useAuthContext();

  useEffect(() => {
    if (currentUser && !isLoading) {
      router.push("/");
    }
  }, [currentUser, isLoading, router]);

  const signIn = async () => {
    try {
      const response = await axios.post<{ user: User; accessToken: string }>(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/users/signin`,
        {
          email: email,
          password: password,
        }
      );
      signin(response?.data.user._id);
      router.push("/");
    } catch (error) {
      toast({
        title: "Алдаа гарлаа!",
        description: "Таны хүсэлтийг боловсруулах явцад алдаа гарлаа." + error,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => signIn())}
        className="flex flex-col justify-center h-screen gap-[48px] items-center"
      >
        <p className="font-bold text-xl">Нэвтрэх</p>
        <div className="flex flex-col gap-2">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <SignupAddressInput
              inputName={"useremail"}
              labelname={"И-мэйл"}
              placeholder={"И-мэйл хаягаа оруулна уу"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center text-end gap-1.5 relative">
            <SignupPasswordInput
              name={"userpassword"}
              labelname={"Нууц үг"}
              placeholder={"Нууц үгээ оруулна уу"}
              onChange={(e) => setPassword(e.target.value)}
              eyes={hidePassword ? <RxEyeOpen /> : <GoEyeClosed />}
              type={!hidePassword ? "password" : "text"}
              onClick={() => setHidePassword((prev) => !prev)}
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
            />
            <Label htmlFor="email">Нууц үг сэргээх</Label>
          </div>
        </div>
        <div className="text-center flex flex-col gap-[32px]">
          <Button
            onClick={signIn}
            className="w-[384px] h-[48px] bg-gray-100"
            variant="outline"
            style={{ backgroundColor: focus ? "#1fdb74" : "" }}
          >
            Нэвтрэх
          </Button>
          <p className="my-2">Эсвэл</p>
          <Link href={"/auth/signUp"}>
            <Button
              className="w-[384px] h-[48px] border-green-600"
              variant="outline"
            >
              Бүртгүүлэх
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Signin;
