"use client";
import { useState } from "react";
const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [codeSubmitted, setCodeSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordSet, setPasswordSet] = useState<boolean>(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeSubmitted(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordSet(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded-2xl">
      <div className="flex flex-col items-center w-[448px] gap-6 p-8">
        <div className="text-xl text-center font-bold text-[28px] rounded-sm w-full leading-8 font-sf-pro">
          Нууц үг сэргээх
        </div>

        {!submitted ? (
          <form onSubmit={handleEmailSubmit} className="w-full">
            <div className="w-full">
              <label
                className="font-normal text-[#000000] font-sf-pro"
                htmlFor="email"
              >
                Имэйл
              </label>
              <input
                id="email"
                type="text"
                className="rounded-md w-full text-start bg-[#ECEDF0] font-normal py-2 px-4 mt-2"
                placeholder="Имэйл хаягаа оруулна уу"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="p-2 rounded-md w-full mt-4 bg-[#18BA51] text-white"
              type="submit"
            >
              Үргэжлүүлэх
            </button>
          </form>
        ) : !codeSubmitted ? (
          <form onSubmit={handleCodeSubmit} className="w-full">
            <p>
              Таны <span className="text-[#18BA51]">{email}</span> хаяг руу
              сэргээх код илгээх болно.
            </p>
            <div className="mt-4">
              <label
                className="font-normal text-[#000000] font-sf-pro"
                htmlFor="code"
              >
                Нууц үг сэргээх код
              </label>
              <input
                id="code"
                type="text"
                className="rounded-md w-full text-start bg-[#ECEDF0] font-normal py-2 px-4 mt-2"
                placeholder="Код оруулна уу"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
              />
              <button
                className="p-2 rounded-md w-full mt-4 bg-[#18BA51] text-white"
                type="submit"
              >
                Үргэлжлүүлэх
              </button>
            </div>
          </form>
        ) : !passwordSet ? (
          <form onSubmit={handlePasswordSubmit} className="w-full">
            <div className="text-center font-bold text-[22px] mb-4">
              Шинэ нууц үг зохиох
            </div>

            <div className="w-full mb-4">
              <label
                className="font-normal text-[#000000] font-sf-pro"
                htmlFor="password"
              >
                Нууц үг
              </label>
              <input
                id="password"
                type="password"
                className="rounded-md w-full text-start bg-[#ECEDF0] font-normal py-2 px-4 mt-2"
                placeholder="Нууц үг"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                className="font-normal text-[#000000] font-sf-pro"
                htmlFor="confirmPassword"
              >
                Нууц үг давтах
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="rounded-md w-full text-start bg-[#ECEDF0] font-normal py-2 px-4 mt-2"
                placeholder="Нууц үг давтах"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              className={`p-2 rounded-md w-full mt-4 ${
                password && confirmPassword && password === confirmPassword
                  ? "bg-[#18BA51] text-white"
                  : "bg-[#ECEDF0] text-[#1C20243D]"
              }`}
              type="submit"
              disabled={
                !password || !confirmPassword || password !== confirmPassword
              }
            >
              Үргэжлүүлэх
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p>Таны нууц үг амжилттай солигдлоо!</p>
            <button
              className="p-2 rounded-md w-full mt-4 bg-[#18BA51] text-white"
              onClick={() => window.location.reload()}
            >
              Дахин эхлэх
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
