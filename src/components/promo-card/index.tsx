import { View, Text } from "react-native";
import { BlurView } from "expo-blur";
import type { LucideIcon } from "lucide-react-native";
import { cn } from "@/lib/cn";
import { Card } from "@/components/card";
import { colors } from "@/theme/colors";

interface PromoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  points: string;
  pointsLabel: string;
  className?: string;
}

export function PromoCard({
  icon: Icon,
  title,
  subtitle,
  points,
  pointsLabel,
  className,
}: PromoCardProps) {
  const titleLines = title.split("\n");
  
  return (
    <Card padding="none" className={cn("overflow-hidden h-full", className)}>
      <View className="absolute inset-0 flex-col">
        <View className="flex-1 bg-accent-dark" />
        <View className="flex-1 bg-accent" />
      </View>

      <View className="flex-1 items-center justify-center px-6">
        <BlurView intensity={100} tint="dark" className="py-3 px-2 items-center justify-center overflow-hidden">
        <Icon size={25} color={colors.neutralWhite} className="text-white mb-2" strokeWidth={2} />

        {titleLines.map((line, i) => (
          <Text
            key={i}
            className="text-white font-bold text-lg leading-tight uppercase tracking-wide text-center text-wrap"
          >
            {line}
          </Text>
        ))}

        {subtitle && (
          <Text className="text-white/70 text-[11px] mt-1 text-center">
            {subtitle}
          </Text>
        )}

        <Text className="text-white/70 text-xs mt-2 text-center">
          {points} {pointsLabel}
        </Text>
      </BlurView>
      </View>
    </Card>
  );
}
