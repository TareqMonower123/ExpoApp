import "../../global.css"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { useAppFonts } from "@/fonts"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { colors } from "@/theme/colors"

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View className="flex-1 dark">
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: colors.bg },
              headerTintColor: colors.text,
              headerTitleStyle: { color: colors.text },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
