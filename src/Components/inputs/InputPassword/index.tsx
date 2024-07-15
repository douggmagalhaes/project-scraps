import React, { forwardRef, useState } from "react";
import { InputProps } from "../interfaces";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const InputPassword = forwardRef(
  (
    { label, error, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [isHidden, setIsHidden] = useState(false);
    const type: string = isHidden ? "text" : "password";
    return (
      <div>
        <label htmlFor="passwordInput">{label}</label>

        <div className="relative">
          <input
            id="passwordInput"
            className="w-[300px] h-[38px] p-2 border-2 border-blue_purple_600 focus:border-blue_purple_500 rounded-xl outline-none"
            ref={ref}
            {...rest}
            type={type}
          />
          {error ? <p>{error.message}</p> : null}

          <button
            className="absolute top-[9px] right-[14px]"
            type="button"
            onClick={() => setIsHidden(!isHidden)}
          >
            {!isHidden ? <FaRegEyeSlash size={21} /> : <FaRegEye size={21} />}
          </button>
        </div>
      </div>
    );
  }
);
