import { View, Text } from "@/tw"
import { colors } from "@/theme/colors"
import type { LucideIcon } from "lucide-react-native"

interface ComingSoonProps {
  icon: LucideIcon
  title?: string
  subtitle?: string
}

export function ComingSoon({
  icon: Icon,
  title = "Coming Soon",
  subtitle = "Under development",
}: ComingSoonProps) {
  return (
    <View className="flex-1 bg-bg items-center justify-center px-5">
      <Icon size={48} color={colors.textMuted} />
      <Text className="text-text text-xl font-primary mt-4">{title}</Text>
      <Text className="text-text-muted text-sm mt-2 font-secondary">{subtitle}</Text>
    </View>
  )
}
