import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { cn } from "@/lib/cn";
import { Card } from "@/components/card";
import { colors } from "@/theme/colors";

interface BookingCardProps {
  time: string;
  period: "AM" | "PM";
  venue: string;
  date: string;
  guests: number;
  onGetDirection?: () => void;
  className?: string;
}

export function BookingCard({
  time,
  period,
  venue,
  date,
  guests,
  onGetDirection,
  className,
}: BookingCardProps) {
  return (
    <Card className={cn("flex-col bg-accent-dark", className)}>
      <View className="p-4 h-full">
        <View className="flex-1 justify-center">
        <Text className="text-muted text-xs mb-1">Upcoming Booking</Text>

        <View className="flex-row items-baseline gap-1 mb-3">
          <Text className="text-accent text-3xl font-bold leading-none">
            {time}
          </Text>
          <Text className="text-accent text-sm font-medium">{period}</Text>
        </View>

        <Text className="text-text text-sm font-medium mb-2">{venue}</Text>

        <View className="flex-row items-center gap-3">
          <Text className="text-muted text-xs flex-1">{date}</Text>
          <Text className="text-muted text-xs shrink-0">{guests} Guests</Text>
        </View>
      </View>

      {onGetDirection && (
        <TouchableOpacity
          onPress={onGetDirection}
          className="mt-4 pt-3 border-t-[0.5px] border-accent/20 flex-row items-center justify-between"
          activeOpacity={0.5}
        >
          <Text className="text-accent text-sm font-medium">Get Direction</Text>
          <ChevronRight size={16} color={colors.accent} />
        </TouchableOpacity>
      )}
      </View>
    </Card>
  );
}
