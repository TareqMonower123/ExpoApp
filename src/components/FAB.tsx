import { Pressable } from "@/tw"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated"
import { Plus } from "lucide-react-native"

const SPRING: WithSpringConfig = { damping: 15, stiffness: 300 }

interface Props {
  onPress: () => void
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function FAB({ onPress }: Props) {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.9, SPRING)
      }}
      onPressOut={() => {
        scale.value = withSpring(1, SPRING)
      }}
      className="absolute bottom-8 right-5 w-14 h-14 rounded-full bg-accent items-center justify-center shadow-lg"
      style={animatedStyle}
    >
      <Plus size={24} color="#ffffff" />
    </AnimatedPressable>
  )
}
