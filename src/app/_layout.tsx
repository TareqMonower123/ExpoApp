import "../../global.css"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View } from "@/tw"
import { useAppFonts } from "@/fonts"
import { Text } from "react-native"

export default function RootLayout() {
  const { fontsLoaded, fontError } = useAppFonts()

  if (fontError) {
    return (
      <View className="flex-1 dark bg-bg items-center justify-center">
        <Text className="text-text">Failed to load fonts</Text>
      </View>
    )
  }

  if (!fontsLoaded) {
    return (
      <View className="flex-1 dark bg-bg items-center justify-center">
        <Text className="text-text">Loading...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 dark">
      <StatusBar style="light" />
      <Slot />
    </View>
  )
}
