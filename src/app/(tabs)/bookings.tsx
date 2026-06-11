import { View, Text } from "@/tw"
import { Calendar } from "lucide-react-native"
import { colors } from "@/theme/colors"

export default function BookingsScreen() {
  return (
    <View className="flex-1 bg-bg items-center justify-center px-5">
      <Calendar size={48} color={colors.textMuted} />
      <Text className="text-text text-xl font-primary mt-4">Coming Soon</Text>
      <Text className="text-text-muted text-sm mt-2 font-secondary">Bookings is under development</Text>
    </View>
  )
}
