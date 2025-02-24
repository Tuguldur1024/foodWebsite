"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";
import { SignupAddressInput } from "@/components/signup-form/SignupAddressInput";
import { SignupPasswordInput } from "@/components/signup-form/SignupPasswordInput";
import { useRouter } from "next/navigation";
import SignupCheck from "@/components/signup-form/SignupCheckbox";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const FormSchema = z
  .object({
    repeatuserpassword: z
      .string()
      .min(5, { message: "Нууц үг давтан хийнэ үү" }),
    userpassword: z
      .string()
      .min(5, { message: "5 ба түүнээс дээш тэмдэгттэй байх ёстой" }),
    username: z.string().min(2, {
      message: "Хэрэглэгчийн нэр дор хаяж 2 тэмдэгт байх ёстой",
    }),
    useremail: z.string().email({
      message: "Имайл хаяг буруу байна",
    }),
    useraddress: z.string().min(5, {
      message: "Хэрэглэгчийн хаяг 5 ба түүнээс дээш тэмдэгттэй байх ёстой",
    }),
  })
  .refine((data) => data.userpassword === data.repeatuserpassword, {
    message: "Нууц үг таарахгүй байна",
    path: ["repeatuserpassword"],
  });

const SignUp = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      repeatuserpassword: "",
      useraddress: "",
      useremail: "",
      username: "",
      userpassword: "",
    },
  });

  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(false);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { toast } = useToast();

  function onSubmit(_: z.infer<typeof FormSchema>) {
    createUser();
  }
  const createUser = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_MONGODB_URI}/users`, {
        email: email,
        firstName: name,
        password: password,
        role: "User",
        address: address,
      })
      .then(function(_response) {
        if (!name || !email || !address || !password) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
        if (password != repeatPassword) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "password buruu baina.",
          });
        } else return router.push("/auth/signIn");
        toast({
          title: "Successful signup ",
          description: "shine bvrtgel amjilttai vvslee",
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center h-screen gap-[48px] items-center  ">
      <p className="font-bold text-xl">Бүртгүүлэх</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <SignupAddressInput
            inputName={"username"}
            labelname={"Нэр"}
            placeholder={"Нэрээ оруулна уу"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <SignupAddressInput
            inputName={"useremail"}
            labelname={"И-мэйл"}
            placeholder={"И-мэйл хаягаа оруулна уу"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <SignupAddressInput
            inputName={"useraddress"}
            labelname={"Хаяг"}
            placeholder={"Та хаягаа оруулна уу"}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <SignupPasswordInput
            name={"userpassword"}
            labelname={"Нууц үг"}
            placeholder={"Нууц үгээ оруулна уу"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            eyes={hidePassword === false ? <GoEyeClosed /> : <RxEyeOpen />}
            type={!hidePassword ? "password" : "text"}
            onClick={() => setHidePassword((prev) => !prev)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <SignupPasswordInput
            name={"repeatuserpassword"}
            labelname={"Нууц үг"}
            placeholder={"Нууц үгээ давтан оруулна уу"}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            eyes={
              hideRepeatPassword === false ? <GoEyeClosed /> : <RxEyeOpen />
            }
            type={!hideRepeatPassword ? "password" : "text"}
            onClick={() => setHideRepeatPassword((prev) => !prev)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <SignupCheck style={{ backgroundColor: focus ? "#18BA51" : "" }} />
        </form>
      </Form>
    </div>
  );
};
export default SignUp;
