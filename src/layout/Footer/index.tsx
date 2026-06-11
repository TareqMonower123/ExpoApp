import { Tabs } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Platform } from "react-native"
import { Home, MapPin, Calendar, Zap, User } from "lucide-react-native"
import { colors } from "@/theme/colors"

export function Footer() {
  const insets = useSafeAreaInsets()

  const baseHeight = Platform.OS === "ios" ? 49 : 56
  const tabBarHeight = baseHeight + 16 + insets.bottom

  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.bg,
          paddingTop: 8,
          paddingBottom: insets.bottom + 8,
          borderTopWidth: 0.2,
          borderTopColor: colors.gray700,
          height: tabBarHeight,
        },
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          tabBarLabel: "Locations",
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hot-perks"
        options={{
          tabBarLabel: "Hot Perks",
          tabBarIcon: ({ color, size }) => <Zap size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  )
}
