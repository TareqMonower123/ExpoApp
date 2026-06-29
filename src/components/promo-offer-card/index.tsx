import { View, Text, TouchableOpacity } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { cn } from "@/lib/cn";
import { Card } from "@/components/card";
import { colors } from "@/theme/colors";

interface PromoOfferCardProps {
  backgroundColor: string;
  label?: string;
  headline: string;
  description: string;
  onPress?: () => void;
  className?: string;
}

export function PromoOfferCard({
  backgroundColor,
  label = "Book Now",
  headline,
  description,
  onPress,
  className,
}: PromoOfferCardProps) {
  return (
    <Card
      bordered={false}
      className={cn("overflow-hidden rounded-large", className)}
      style={{ backgroundColor, height: 200 }}
    >
      <TouchableOpacity
        onPress={onPress}
        className="p-5 flex-1 justify-between"
        activeOpacity={0.8}
      >
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-white font-medium text-sm">{label}</Text>
          <ArrowRight size={16} color={colors.neutralWhite} />
        </View>

        <Text className="text-white font-bold mb-2" style={{ fontSize: 56 }}>
          {headline}
        </Text>

        <Text
          className="text-white/70 text-sm leading-tight"
          numberOfLines={2}
        >
          {description}
        </Text>
      </TouchableOpacity>
    </Card>
  );
}
