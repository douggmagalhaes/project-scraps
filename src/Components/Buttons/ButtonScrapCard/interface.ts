import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

export interface IButtonScrapCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType;
  text?: string;
  //onClick?: () => void
  //children: ReactNode
}
