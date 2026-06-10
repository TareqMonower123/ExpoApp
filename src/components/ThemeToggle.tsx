import { TouchableOpacity, useCSSVariable } from "@/tw"
import { Sun, Moon } from "lucide-react-native"
import { useTheme } from "@/store/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === "dark" ? Sun : Moon
  const textColor = useCSSVariable("--color-text")

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      activeOpacity={0.7}
      className="w-10 h-10 rounded-full items-center justify-center bg-card border border-border"
    >
      <Icon size={18} color={textColor} />
    </TouchableOpacity>
  )
}
