import { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

/*
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
}
*/

export type TextAreaProps = {
  label?: string;
  error?: FieldError;
  [k: string]: any;
};
