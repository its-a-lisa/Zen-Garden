// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q9SbVKdQNQqS8hT1VyyZBb
// Component: DAdhKH9ef4Qh

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_zen.module.css"; // plasmic-import: q9SbVKdQNQqS8hT1VyyZBb/projectcss
import sty from "./PlasmicToggle.module.css"; // plasmic-import: DAdhKH9ef4Qh/css

createPlasmicElementProxy;

export type PlasmicToggle__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
};
export type PlasmicToggle__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};
type VariantPropType = keyof PlasmicToggle__VariantsArgs;
export const PlasmicToggle__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export type PlasmicToggle__ArgsType = {
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
};
type ArgPropType = keyof PlasmicToggle__ArgsType;
export const PlasmicToggle__ArgProps = new Array<ArgPropType>(
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange"
);

export type PlasmicToggle__OverridesType = {
  root?: Flex__<"div">;
  toggle?: Flex__<"div">;
  track?: Flex__<"div">;
  handle?: Flex__<"div">;
};

export interface DefaultToggleProps extends pp.SwitchProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicToggle__RenderFunc(props: {
  variants: PlasmicToggle__VariantsArgs;
  args: PlasmicToggle__ArgsType;
  overrides: PlasmicToggle__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel")
        }
      )}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggleisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.toggleisDisabled]: hasVariant($state, "isDisabled", "isDisabled")
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.trackisChecked]: hasVariant($state, "isChecked", "isChecked"),
            [sty.trackisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            )
          })}
        />

        <div
          data-plasmic-name={"handle"}
          data-plasmic-override={overrides.handle}
          className={classNames(projectcss.all, sty.handle, {
            [sty.handleisChecked]: hasVariant($state, "isChecked", "isChecked")
          })}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.SwitchProps>(props: P, ref: pp.SwitchRef) {
  return pp.useSwitch<P, typeof PlasmicToggle>(
    PlasmicToggle,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "handle"],
  toggle: ["toggle", "track", "handle"],
  track: ["track"],
  handle: ["handle"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggle: "div";
  track: "div";
  handle: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicToggle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicToggle__VariantsArgs;
    args?: PlasmicToggle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicToggle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicToggle__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicToggle__ArgProps,
          internalVariantPropNames: PlasmicToggle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicToggle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggle";
  } else {
    func.displayName = `PlasmicToggle.${nodeName}`;
  }
  return func;
}

export const PlasmicToggle = Object.assign(
  // Top-level PlasmicToggle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    handle: makeNodeComponent("handle"),

    // Metadata about props expected for PlasmicToggle
    internalVariantProps: PlasmicToggle__VariantProps,
    internalArgProps: PlasmicToggle__ArgProps,

    useBehavior
  }
);

export default PlasmicToggle;
/* prettier-ignore-end */