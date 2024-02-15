// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type Mode2Value = "dark";
export const Mode2Context = React.createContext<Mode2Value | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useMode2() {
  return React.useContext(Mode2Context);
}

export default Mode2Context;
/* prettier-ignore-end */
