import { ComingSoon } from "@/components/coming-soon"
import { Home } from "lucide-react-native"

export default function HomeScreen() {
  return (
    <ComingSoon
      icon={Home}
      title="Coming Soon"
      subtitle="Home is under development"
    />
  )
}
