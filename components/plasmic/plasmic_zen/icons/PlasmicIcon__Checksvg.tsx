// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChecksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChecksvgIcon(props: ChecksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.492 13.781a1.06 1.06 0 01-1.523 0l-2.5-2.5a1.061 1.061 0 010-1.523 1.06 1.06 0 011.523 0l1.758 1.719 4.219-4.22a1.062 1.062 0 011.523 0c.43.43.43 1.095 0 1.524l-5 5zM20 10.5c0 5.547-4.492 10-10 10a9.97 9.97 0 01-10-10C0 4.992 4.453.5 10 .5c5.508 0 10 4.492 10 10zM10 2.375c-4.492 0-8.125 3.672-8.125 8.125A8.119 8.119 0 0010 18.625c4.453 0 8.125-3.633 8.125-8.125 0-4.453-3.672-8.125-8.125-8.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChecksvgIcon;
/* prettier-ignore-end */
