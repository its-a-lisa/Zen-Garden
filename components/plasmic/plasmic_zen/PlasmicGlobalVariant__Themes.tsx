// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ThemesValue = "light" | "dark";
export const ThemesContext = React.createContext<ThemesValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useThemes() {
  return React.useContext(ThemesContext);
}

export default ThemesContext;
/* prettier-ignore-end */
