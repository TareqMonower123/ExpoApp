import { useState, useEffect, useCallback, useRef } from "react"
import { Keyboard, Platform, PanResponder } from "react-native"
import { Pressable, TextInput, Text, View, useCSSVariable } from "@/tw"
import { Animated, useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolate, Extrapolation } from "@/tw/animated"
import type { WithSpringConfig } from "@/tw/animated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTodos } from "@/store/TodoContext"
import type { Todo } from "@/types/todo"

const SPRING: WithSpringConfig = { damping: 25, stiffness: 300 }
const SPRING_OUT: WithSpringConfig = { damping: 22, stiffness: 280 }
const SHEET_HEIGHT = 400

interface Props {
  todo: Todo | null
  onClose: () => void
}

export default function TodoDetailSheet({ todo, onClose }: Props) {
  const { dispatch } = useTodos()
  const insets = useSafeAreaInsets()
  const [title, setTitle] = useState("")
  const textMuted = useCSSVariable("--color-text-muted")
  const [description, setDescription] = useState("")
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const visible = todo !== null

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
    if (todo) {
      setTitle(todo.title)
      setDescription(todo.description)
      translateY.value = withSpring(0, SPRING)
      backdropOpacity.value = withTiming(1, { duration: 250 })
      scale.value = withSpring(1, SPRING)
    } else {
      translateY.value = withSpring(SHEET_HEIGHT + insets.bottom + 40, SPRING_OUT)
      backdropOpacity.value = withTiming(0, { duration: 200 })
      scale.value = withTiming(0.95, { duration: 200 })
      Keyboard.dismiss()
    }
  }, [todo])

  const handleClose = useCallback(() => {
    onClose()
    Keyboard.dismiss()
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

  function handleToggle() {
    if (!todo) return
    dispatch({ type: "TOGGLE_TODO", id: todo.id })
  }

  function handleDelete() {
    if (!todo) return
    dispatch({ type: "DELETE_TODO", id: todo.id })
    handleClose()
  }

  function handleSaveTitle() {
    if (!todo) return
    const trimmed = title.trim()
    if (!trimmed) return
    dispatch({ type: "EDIT_TODO", id: todo.id, title: trimmed })
  }

  function handleSaveDescription(text: string) {
    if (!todo) return
    setDescription(text)
    dispatch({ type: "SET_DESCRIPTION", id: todo.id, description: text })
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
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={handleToggle}
              className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                todo?.completed
                  ? "bg-checkbox-active border-checkbox-active"
                  : "bg-transparent border-checkbox"
              }`}
            >
              {todo?.completed && (
                <Text className="text-white text-xs font-bold">✓</Text>
              )}
            </Pressable>

            <TextInput
              value={title}
              onChangeText={setTitle}
              onBlur={handleSaveTitle}
              onSubmitEditing={handleSaveTitle}
              returnKeyType="done"
              className={`flex-1 text-lg p-0 ${
                todo?.completed ? "text-completed line-through font-inter" : "text-text font-inter-bold"
              }`}
            />
          </View>

          <View className="mt-5">
            <Text className="text-xs font-inter-bold text-text-secondary uppercase tracking-[0.5px] mb-2">
              Description
            </Text>
            <TextInput
              value={description}
              onChangeText={handleSaveDescription}
              placeholder="Add a description..."
              placeholderTextColor={textMuted}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="bg-input text-text rounded-xl px-4 py-3 text-[15px] font-inter border border-border min-h-[100px]"
            />
          </View>

          <Pressable
            onPress={handleDelete}
            className="flex-row items-center justify-center gap-1.5 mt-5 py-3 rounded-xl border border-danger"
          >
            <Text className="text-danger text-sm">✕</Text>
            <Text className="text-danger text-sm font-inter-bold">
              Delete Todo
            </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  )
}
