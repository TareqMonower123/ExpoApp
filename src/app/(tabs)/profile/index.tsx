import { ComingSoon } from "@/components/coming-soon"
import { User } from "lucide-react-native"

export default function ProfileScreen() {
  return (
    <ComingSoon
      icon={User}
      title="Coming Soon"
      subtitle="Profile is under development"
    />
  )
}
