import React, { forwardRef } from "react";
import { InputProps } from "../interfaces";

export const Input = forwardRef(
  (
    { label, error, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className="flex flex-col ">
        <label htmlFor="inputId">{label}</label>
        <input
          className="w-[300px] h-[38px] p-2 border-2 border-blue_purple_600 focus:border-blue_purple_500 outline-none rounded-xl"
          id="inputId"
          ref={ref}
          {...rest}
        />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
