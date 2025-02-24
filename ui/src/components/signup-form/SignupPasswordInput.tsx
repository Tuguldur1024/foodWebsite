"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type PasswordInput = {
  name: string;
  labelname: string;
  placeholder: string;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  eyes: JSX.Element;
  type: string;
  onFocus: () => void;
  onBlur: () => void;
};
export const SignupPasswordInput = ({
  name,
  labelname,
  placeholder,
  onChange,
  eyes,
  type,
  onClick,
  onBlur,
  onFocus,
}: PasswordInput) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <FormField
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{labelname}</FormLabel>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  onChange(e);
                }}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                className="w-[384px] h-[48px] bg-gray-100 "
                placeholder={placeholder}
                type={type}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />{" "}
      <div
        onClick={() => onClick()}
        className="absolute right-3 top-14 transform -translate-y-1/2 cursor-pointer"
      >
        {eyes}
      </div>
    </div>
  );
};
