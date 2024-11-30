import { ReactElement } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { TTextareaProps } from "@/entities/common";

export const ITextArea = <T extends FieldValues>(
  props: TTextareaProps<T>
): ReactElement => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Textarea placeholder={props.placeholder} {...field} {...props} />
          </FormControl>
          <FormDescription>{props.description || ""}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
