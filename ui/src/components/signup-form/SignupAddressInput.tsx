"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type SignUpInput = {
  inputName: string;
  labelname: string;
  placeholder: string;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SignupAddressInput = ({
  inputName,
  labelname,
  placeholder,
  onChange,
}: SignUpInput) => {
  return (
    <FormField
      name={inputName}
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
              className="w-[384px] h-[48px] bg-gray-100 "
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
