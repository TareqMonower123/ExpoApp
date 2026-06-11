import { ComingSoon } from "@/components/coming-soon"
import { MapPin } from "lucide-react-native"

export default function LocationsScreen() {
  return (
    <ComingSoon
      icon={MapPin}
      title="Coming Soon"
      subtitle="Locations is under development"
    />
  )
}
