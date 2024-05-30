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
        <label htmlFor="">{label}</label>

        <div>
          <input ref={ref} {...rest} type={type} />
          {error ? <p>{error.message}</p> : null}

          <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {!isHidden ? <FaRegEyeSlash size={21} /> : <FaRegEye size={21} />}
          </button>
        </div>
      </div>
    );
  }
);
