import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
export type TInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type TInputTextArea = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
export type TInputProps<T extends FieldValues> = UseControllerProps<T> &
  TInput & { label?: string; description?: string };
export type TTextareaProps<T extends FieldValues> = UseControllerProps<T> &
  TInputTextArea & { label?: string; description?: string };
