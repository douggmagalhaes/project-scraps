import React, { forwardRef } from "react";
import { InputProps } from "../interfaces";

export const Input = forwardRef(
  (
    { label, error, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <input ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
