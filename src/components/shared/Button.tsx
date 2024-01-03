import React, { Fragment } from "react";
import classnames from "classnames";

export enum ButtonVariants {
  Primary = "primary",
  Transparent = "transparent",
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles: { [key: string]: string } = {
  [ButtonVariants.Primary]:
    "bg-white text-black  border-2 border-osint-light-purple",
  [ButtonVariants.Transparent]: "bg-transparent text-white",
};

export const Button = (props: ButtonProps) => {
  // select style or default to primary
  const styles = variantStyles[props.variant ?? ButtonVariants.Primary];
  return (
    <button
      className={classnames(styles, "px-5 py-3 rounded-lg ", props.className)}
      type="button"
      onClick={props.onClick}
    >
      {!props.icon && <Fragment>{props.label}</Fragment>}
      {props.icon && (
        <p className="flex items-center justify-center">
          <span className="mr-2">{props.label}</span>
          {props.icon}
        </p>
      )}
    </button>
  );
};
