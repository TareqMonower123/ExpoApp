import { ComingSoon } from "@/components/coming-soon";
import { Zap } from "lucide-react-native";

export default function HotPerksScreen() {
  return (
    <ComingSoon
      icon={Zap}
      title="Coming Soon"
      subtitle="Hot Perks is under development"
    />
  );
}
