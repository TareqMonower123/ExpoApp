import { useState, useEffect, useCallback, useRef } from "react"
import { Keyboard, Platform, PanResponder } from "react-native"
import { Pressable, TextInput, Text, View, useCSSVariable } from "@/tw"
import { Animated, useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolate, Extrapolation } from "@/tw/animated"
import type { WithSpringConfig } from "@/tw/animated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTodos } from "@/store/TodoContext"

const SPRING: WithSpringConfig = { damping: 25, stiffness: 300 }
const SPRING_OUT: WithSpringConfig = { damping: 22, stiffness: 280 }
const SHEET_HEIGHT = 240

interface Props {
  visible: boolean
  onClose: () => void
}

export default function AddTodoSheet({ visible, onClose }: Props) {
  const { dispatch } = useTodos()
  const insets = useSafeAreaInsets()
  const [text, setText] = useState("")
  const textMuted = useCSSVariable("--color-text-muted")
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const translateY = useSharedValue(SHEET_HEIGHT + insets.bottom + 40)
  const backdropOpacity = useSharedValue(0)
  const scale = useSharedValue(0.95)

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gs) => gs.dy > 5,
      onPanResponderMove: (_, gs) => {
        if (gs.dy > 0) {
          translateY.value = gs.dy
          backdropOpacity.value = interpolate(gs.dy, [0, SHEET_HEIGHT], [1, 0], Extrapolation.CLAMP)
        }
      },
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 100 || gs.vy > 0.5) {
          translateY.value = withSpring(SHEET_HEIGHT + insets.bottom + 40, SPRING_OUT)
          backdropOpacity.value = withTiming(0, { duration: 200 })
          onClose()
          Keyboard.dismiss()
        } else {
          translateY.value = withSpring(0, SPRING)
          backdropOpacity.value = withTiming(1, { duration: 200 })
        }
      },
    }),
  ).current

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => setKeyboardHeight(e.endCoordinates.height),
    )
    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardHeight(0),
    )
    return () => {
      showSub.remove()
      hideSub.remove()
    }
  }, [])

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, SPRING)
      backdropOpacity.value = withTiming(1, { duration: 250 })
      scale.value = withSpring(1, SPRING)
      setText("")
    } else {
      translateY.value = withSpring(SHEET_HEIGHT + insets.bottom + 40, SPRING_OUT)
      backdropOpacity.value = withTiming(0, { duration: 200 })
      scale.value = withTiming(0.95, { duration: 200 })
      Keyboard.dismiss()
    }
  }, [visible])

  const handleClose = useCallback(() => {
    onClose()
    Keyboard.dismiss()
    setText("")
  }, [onClose])

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }))

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  function handleAdd() {
    if (!text.trim()) return
    dispatch({ type: "ADD_TODO", title: text })
    setText("")
    handleClose()
  }

  return (
    <View className="absolute inset-0" pointerEvents={visible ? "auto" : "none"}>
      <Animated.View className="absolute inset-0 bg-black" style={backdropStyle}>
        <Pressable className="absolute inset-0" onPress={handleClose} />
      </Animated.View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          sheetStyle,
          { paddingBottom: Math.max(keyboardHeight || 0, insets.bottom + 16) },
        ]}
        className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl px-6 pt-3 shadow-lg"
      >
        <View className="w-10 h-1 rounded-full bg-text-muted self-center mb-4" />

        <Animated.View style={contentStyle}>
          <Text className="text-xl font-inter-bold text-text mb-4">
            New Todo
          </Text>

          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What needs to be done?"
            placeholderTextColor={textMuted}
            onSubmitEditing={handleAdd}
            returnKeyType="done"
            className="bg-input text-text rounded-xl px-4 py-3 text-[15px] font-inter border border-border"
          />

          <Pressable
            onPress={handleAdd}
            className={`bg-accent rounded-xl py-[14px] items-center mt-3 ${!text.trim() ? "opacity-50" : ""}`}
          >
            <Text className="text-white text-[15px] font-inter-bold">
              Add Todo
            </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  )
}
