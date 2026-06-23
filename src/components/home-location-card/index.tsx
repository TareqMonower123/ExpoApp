import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MapPin, ChevronRight } from "lucide-react-native";
import { cn } from "@/lib/cn";
import { Card } from "@/components/card";
import { colors } from "@/theme/colors";

const DEMO_IMAGE_URI = "https://picsum.photos/seed/bective-mill/900/700";

interface HomeLocationCardProps {
  imageUri?: string;
  title?: string;
  address?: string;
  onPressPin?: () => void;
  onPressBook?: () => void;
  className?: string;
}

export function HomeLocationCard({
  imageUri = DEMO_IMAGE_URI,
  title = "Bective Mill House",
  address = "Navan, Co. Meath. C15H519",
  onPressPin,
  onPressBook,
  className,
}: HomeLocationCardProps) {
  return (
    <Card className={cn("overflow-hidden h-85", className)}>
      <Image
        source={{ uri: imageUri }}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />

      <TouchableOpacity
        onPress={onPressPin}
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-accent-dark items-center justify-center"
        activeOpacity={0.8}
      >
        <MapPin size={20} color={colors.accent} strokeWidth={2} />
      </TouchableOpacity>

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.85)", "#000"]}
        locations={[0, 0.3, 0.6, 1]}
        className="absolute inset-x-0 bottom-0 px-5 pt-17.5 pb-5"
      >
        <Text className="text-white font-bold text-2xl mb-1.5" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-secondary text-sm mb-3.5" numberOfLines={1}>
          {address}
        </Text>

        <TouchableOpacity
          onPress={onPressBook}
          className="flex-row items-center justify-between pt-3 border-t-[0.5px] border-accent/20"
          activeOpacity={0.7}
        >
          <Text className="text-accent font-semibold text-base">Book Now</Text>
          <ChevronRight size={18} color={colors.accent} />
        </TouchableOpacity>
      </LinearGradient>
    </Card>
  );
}
