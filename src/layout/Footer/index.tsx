import { Tabs } from "expo-router";
import { Home, MapPin, Gift, Calendar1 } from "lucide-react-native";
import { colors } from "@/theme/colors";

export function Footer() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopWidth: 0.2,
          borderTopColor: colors.gray700,
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
        name="bookings"
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <Calendar1 size={size} color={color} />
          ),
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
        name="hot-perks"
        options={{
          tabBarLabel: "Hot Perks",
          tabBarIcon: ({ color, size }) => <Gift size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
