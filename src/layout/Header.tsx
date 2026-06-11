import { View, TouchableOpacity, SafeAreaView } from "@/tw"
import { Settings } from "lucide-react-native"
import { IconStore } from "@/components/iconStore"
import { colors } from "@/theme/colors"

export function Header() {
  return (
    <SafeAreaView edges={["top"]} className="bg-bg">
      <View className="flex-row items-center justify-between px-5">
        <IconStore iconName="hotbox-logo" color={colors.text} />
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-10 h-10 rounded-full items-center justify-center bg-card border border-border shadow-sm"
        >
          <Settings size={18} color={colors.text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
