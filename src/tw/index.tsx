import {
  useCssElement,
  useNativeVariable as useFunctionalVariable,
} from "react-native-css";

import { Link as RouterLink } from "expo-router";
import React from "react";
import RNAnimated from "react-native-reanimated";
import {
  View as RNView,
  Text as RNText,
  Pressable as RNPressable,
  ScrollView as RNScrollView,
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TextInput as RNTextInput,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

type AnyProps = Record<string, any>

const css = useCssElement as any

export const Link = (props: AnyProps & { className?: string }): any => {
  return css(RouterLink, props, { className: "style" });
};

Link.Trigger = RouterLink.Trigger;
Link.Menu = RouterLink.Menu;
Link.MenuAction = RouterLink.MenuAction;
Link.Preview = RouterLink.Preview;

export const useCSSVariable =
  process.env.EXPO_OS !== "web"
    ? useFunctionalVariable
    : (variable: string) => `var(${variable})`;

export type ViewProps = React.ComponentProps<typeof RNView> & {
  className?: string;
};

export const View = (props: ViewProps): any => {
  return css(RNView, props, { className: "style" });
};
View.displayName = "CSS(View)";

export const Text = (props: AnyProps & { className?: string }): any => {
  return css(RNText, props, { className: "style" });
};
Text.displayName = "CSS(Text)";

export const ScrollView = (props: AnyProps & { className?: string; contentContainerClassName?: string }): any => {
  return css(RNScrollView, props, {
    className: "style",
    contentContainerClassName: "contentContainerStyle",
  });
};
ScrollView.displayName = "CSS(ScrollView)";

export const Pressable = (props: AnyProps & { className?: string }): any => {
  return css(RNPressable, props, { className: "style" });
};
Pressable.displayName = "CSS(Pressable)";

export const TextInput = (props: AnyProps & { className?: string }): any => {
  return css(RNTextInput, props, { className: "style" });
};
TextInput.displayName = "CSS(TextInput)";

export const TouchableOpacity = (props: AnyProps & { className?: string }): any => {
  return css(RNTouchableOpacity, props, { className: "style" });
};
TouchableOpacity.displayName = "CSS(TouchableOpacity)";

export const TouchableHighlight = (props: AnyProps & { className?: string }): any => {
  return css(RNTouchableHighlight, props, { className: "style" });
};
TouchableHighlight.displayName = "CSS(TouchableHighlight)";

export const SafeAreaView = (props: AnyProps & { className?: string }): any => {
  return css(RNSafeAreaView, props, { className: "style" });
};
SafeAreaView.displayName = "CSS(SafeAreaView)";

export const AnimatedScrollView = (props: AnyProps & { className?: string; contentClassName?: string; contentContainerClassName?: string }): any => {
  return css(RNAnimated.ScrollView, props, {
    className: "style",
    contentClassName: "contentContainerStyle",
    contentContainerClassName: "contentContainerStyle",
  });
};
