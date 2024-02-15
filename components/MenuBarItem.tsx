import * as React from "react";
import {
  PlasmicMenuBarItem,
  DefaultMenuBarItemProps
} from "./plasmic/plasmic_zen/PlasmicMenuBarItem";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface MenuBarItemProps extends DefaultMenuBarItemProps {
  // Feel free to add any additional props that this component should receive
}
function MenuBarItem_(props: MenuBarItemProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicMenuBarItem.useBehavior<MenuBarItemProps>(
    props,
    ref
  );
  return <PlasmicMenuBarItem {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<MenuBarItemProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<MenuBarItemProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const MenuBarItem = React.forwardRef(
  MenuBarItem_
) as any as ButtonComponentType;

export default Object.assign(MenuBarItem, { __plumeType: "button" });
