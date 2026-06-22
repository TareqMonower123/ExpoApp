import { MarqueeOffer } from "@/components/marquee-offer";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-bg">
      <MarqueeOffer
        text="Get 50% OFF memberships - Limited time offer!! Join Now"
        speed={1}
      />
    </View>
  );
}
