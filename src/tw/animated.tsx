import * as TW from "./index";
import RNAnimated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolation,
  type WithSpringConfig,
} from "react-native-reanimated";

export const Animated = {
  ...RNAnimated,
  View: RNAnimated.createAnimatedComponent(TW.View),
  Text: RNAnimated.createAnimatedComponent(TW.Text),
  Pressable: RNAnimated.createAnimatedComponent(TW.Pressable),
  ScrollView: RNAnimated.createAnimatedComponent(TW.ScrollView),
};

export {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolation,
};
export type { WithSpringConfig };
