"use client";

export const Payment = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>Төлбөр төлөх </div>
      <div className="flex justify-between">
        <div className="flex flex-row gap-2 space-x-2 w-[175px]">
          <input type="checkbox" id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Бэлнээр
          </label>
        </div>
        <div className="flex flex-row gap-2 space-x-2 w-[175px]">
          <input type="checkbox" id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
          >
            Картаар
          </label>
        </div>
      </div>
    </div>
  );
};
