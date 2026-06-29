import { View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  variant?: "default" | "promo";
  padding?: "normal" | "none";
  bordered?: boolean;
  className?: string;
  style?: ViewStyle;
  children: ReactNode;
}

export function Card({
  variant = "default",
  bordered = true,
  className,
  style,
  children,
}: CardProps) {
  return (
    <View
      className={cn(
        variant === "default" && "bg-card",
        variant === "promo" && "bg-accent",
        className,
      )}
      style={[!bordered && { borderWidth: 0 }, style]}
    >
      {children}
    </View>
  );
}
