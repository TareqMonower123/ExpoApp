import { ComingSoon } from "@/components/coming-soon";
import { Calendar } from "lucide-react-native";

export default function BookingsScreen() {
  return (
    <ComingSoon
      icon={Calendar}
      title="Coming Soon"
      subtitle="Bookings is under development"
    />
  );
}
