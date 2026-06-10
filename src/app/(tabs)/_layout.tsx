import { Tabs } from "expo-router"
import { ListChecks, Timer } from "lucide-react-native"
import { View, Text, TouchableOpacity, SafeAreaView, useCSSVariable } from "@/tw"
import { useTheme } from "@/store/ThemeContext"
import { Sun, Moon } from "lucide-react-native"

function Header() {
  const { theme, toggleTheme } = useTheme()
  const textColor = useCSSVariable("--color-text")

  return (
    <SafeAreaView edges={["top"]} className="bg-bg">
      <View className="flex-row items-center justify-between px-5">
        <Text className="shrink-0 w-fit text-accent text-lg font-inter-bold font-bold">The Hot Box</Text>
        <TouchableOpacity
          onPress={toggleTheme}
          activeOpacity={0.7}
          className="w-10 h-10 rounded-full items-center justify-center bg-card border border-border shadow-sm"
        >
          {theme === "dark" ? <Sun size={18} color={textColor} /> : <Moon size={18} color={textColor} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default function TabLayout() {
  const card = useCSSVariable("--color-card")
  const accent = useCSSVariable("--color-accent")
  const textMuted = useCSSVariable("--color-text-muted")

  return (
    <View className="flex-1 bg-bg">
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: card },
          tabBarActiveTintColor: accent,
          tabBarInactiveTintColor: textMuted,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Todos",
            tabBarIcon: ({ color, size }) => <ListChecks size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="timer"
          options={{
            tabBarLabel: "Timer",
            tabBarIcon: ({ color, size }) => <Timer size={size} color={color} />,
          }}
        />
      </Tabs>
    </View>
  )
}
