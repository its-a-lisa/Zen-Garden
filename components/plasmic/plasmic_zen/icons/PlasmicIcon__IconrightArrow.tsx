// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconrightArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconrightArrowIcon(props: IconrightArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.531 13.078c.61-.562.61-1.547 0-2.11l-7.5-7.5a1.445 1.445 0 00-2.11 0 1.445 1.445 0 000 2.11l4.923 4.922H1.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5h14.344l-4.922 4.969a1.445 1.445 0 000 2.11 1.448 1.448 0 002.11 0l7.5-7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconrightArrowIcon;
/* prettier-ignore-end */
