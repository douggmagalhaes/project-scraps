import { ButtonHTMLAttributes } from "react";

export interface ButtonSubmitProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
