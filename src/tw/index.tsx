import { useCssElement } from "react-native-css"
import React from "react"
import {
  View as RNView,
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
} from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"

type AnyProps = Record<string, any>

const css = useCssElement as any

// View: primary layout container with Tailwind className support
export type ViewProps = React.ComponentProps<typeof RNView> & {
  className?: string
}

export const View = (props: ViewProps): any => {
  return css(RNView, props, { className: "style" })
}
View.displayName = "CSS(View)"

// Text: text rendering with Tailwind className support
export const Text = (props: AnyProps & { className?: string }): any => {
  return css(RNText, props, { className: "style" })
}
Text.displayName = "CSS(Text)"

// TouchableOpacity: pressable button with Tailwind className support
export const TouchableOpacity = (props: AnyProps & { className?: string }): any => {
  return css(RNTouchableOpacity, props, { className: "style" })
}
TouchableOpacity.displayName = "CSS(TouchableOpacity)"

// SafeAreaView: safe area wrapper with Tailwind className support
export const SafeAreaView = (props: AnyProps & { className?: string }): any => {
  return css(RNSafeAreaView, props, { className: "style" })
}
SafeAreaView.displayName = "CSS(SafeAreaView)"
