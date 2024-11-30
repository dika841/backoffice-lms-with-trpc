"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TInputProps } from "@/entities/common";
import { FieldValues } from "react-hook-form";

export const IInputField = <T extends FieldValues>(props: TInputProps<T>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
