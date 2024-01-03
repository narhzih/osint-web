import React from "react";
import classnames from "classnames";

export const PAGE_WIDE_PADDING_X = "xl:px-[5rem] lg:px-[3rem] px-[1rem]";
export const PAGE_WIDE_PADDING_L = "xl:pl-[5rem] lg:px-[3rem]";
export const PAGE_WIDE_PADDING_R = "xl:pr-[5rem] lg:pr-[3rem]";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={classnames(PAGE_WIDE_PADDING_X, className)}>{children}</div>
  );
};
