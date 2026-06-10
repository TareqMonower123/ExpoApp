import "../../global.css"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider, useTheme } from "@/store/ThemeContext"
import { View } from "@/tw"

function RootLayoutInner() {
  const { theme } = useTheme()

  return (
    <View className={`flex-1 ${theme === "dark" ? "dark" : ""}`}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Slot />
    </View>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutInner />
    </ThemeProvider>
  )
}
