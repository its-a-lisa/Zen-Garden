import * as React from "react";
import {
  PlasmicListItem,
  DefaultListItemProps
} from "./plasmic/plasmic_zen/PlasmicListItem";

import { TextInputRef } from "@plasmicapp/react-web";

export interface ListItemProps extends DefaultListItemProps {
  // Feel free to add any additional props that this component should receive
}
function ListItem_(props: ListItemProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicListItem.useBehavior<ListItemProps>(
    props,
    ref
  );
  return <PlasmicListItem {...plasmicProps} />;
}

const ListItem = React.forwardRef(ListItem_);

export default Object.assign(
  ListItem,

  {
    __plumeType: "text-input"
  }
);
