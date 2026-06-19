import { TouchableOpacity } from "react-native"
import { X } from "lucide-react-native"
import { View, Text } from "react-native"
import { colors } from "@/theme/colors"
import { ComingSoon } from "@/components/coming-soon"
import { Settings } from "lucide-react-native"

interface SettingsPanelProps {
  onClose: () => void
}

export function SettingsPanel({ onClose }: SettingsPanelProps) {
  return (
    <View className="flex-1 bg-bg">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4" style={{ borderBottomWidth: 0.2, borderBottomColor: colors.gray700 }}>
        <Text className="text-text text-lg font-primary">Settings</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onClose}
          className="w-8 h-8 rounded-full items-center justify-center bg-card"
        >
          <X size={18} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ComingSoon
        icon={Settings}
        title="Coming Soon"
        subtitle="Settings is under development"
      />
    </View>
  )
}
