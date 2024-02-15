import * as React from "react";
import {
  PlasmicToggle,
  DefaultToggleProps
} from "./plasmic/plasmic_zen/PlasmicToggle";

import { SwitchRef } from "@plasmicapp/react-web";

export interface ToggleProps extends DefaultToggleProps {
  // Feel free to add any additional props that this component should receive
}
function Toggle_(props: ToggleProps, ref: SwitchRef) {
  const { plasmicProps, state } = PlasmicToggle.useBehavior<ToggleProps>(
    props,
    ref
  );
  return <PlasmicToggle {...plasmicProps} />;
}

const Toggle = React.forwardRef(Toggle_);

export default Object.assign(
  Toggle,

  {
    __plumeType: "switch",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
