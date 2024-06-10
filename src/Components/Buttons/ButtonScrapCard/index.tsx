import { IButtonScrapCardProps } from "./interface";

export const ButtonScrapCard = ({
  text,
  icon: Icon,
  ...rest
}: IButtonScrapCardProps): JSX.Element => {
  return (
    <button {...rest}>
      <Icon />
    </button>
  );
};
