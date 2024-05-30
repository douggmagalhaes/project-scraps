import { FieldError } from "react-hook-form";

export type InputProps = {
  label?: string;
  error?: FieldError;
  [k: string]: any;
};
