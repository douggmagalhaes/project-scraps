import { ButtonSubmitProps } from "./interface";

export const ButtonSubmit = ({
  text,
  ...rest
}: ButtonSubmitProps): JSX.Element => {
  return (
    <button
      className="flex justify-center items-center w-[300px] h-[38px] p-2 bg-blue_purple_600 hover:bg-blue_purple_500 text-white rounded-xl"
      {...rest}
    >
      {text}
    </button>
  );
};
