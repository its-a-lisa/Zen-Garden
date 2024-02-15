// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type BrandsValue = "seventeenSierra";
export const BrandsContext = React.createContext<BrandsValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useBrands() {
  return React.useContext(BrandsContext);
}

export default BrandsContext;
/* prettier-ignore-end */
