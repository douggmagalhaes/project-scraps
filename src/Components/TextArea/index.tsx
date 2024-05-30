import React, { forwardRef } from "react";
import { TextAreaProps } from "./interfaces";

export const TextArea = forwardRef(
  (
    { label, error, ...rest }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <textarea ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);

/*
export const TextArea = forwardRef(
  (
    { label, error, ...rest }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div>
        <label>{label}</label>
        <textarea ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
*/
