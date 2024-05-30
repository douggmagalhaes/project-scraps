import { ButtonSubmitProps } from "./interface";

export const ButtonSubmit = ({
  text,
  ...rest
}: ButtonSubmitProps): JSX.Element => {
  return <button {...rest}>{text}</button>;
};
