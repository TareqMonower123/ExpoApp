import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "lucide-react-native";
import { IconStore } from "@/components/iconStore";
import { colors } from "@/theme/colors";

interface HeaderProps {
  onPressSettings?: () => void;
}

export function Header({ onPressSettings }: HeaderProps) {
  return (
    <SafeAreaView edges={["top"]} className="bg-bg">
      <View
        className="flex-row items-center justify-between px-5"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          borderBottomWidth: 0.2,
          borderBottomColor: colors.gray700,
        }}
      >
        <IconStore iconName="hotbox-logo" color={colors.text} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressSettings}
          className="w-10 h-10 rounded-full items-center justify-center bg-card shadow-sm"
          style={{ borderWidth: 0.2, borderColor: colors.gray700 }}
        >
          <User size={18} color={colors.tabActive} className="cursor-pointer" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
