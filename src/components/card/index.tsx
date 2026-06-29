import { View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  variant?: "default" | "promo";
  padding?: "normal" | "none";
  className?: string;
  style?: ViewStyle;
  children: ReactNode;
}

export function Card({
  variant = "default",
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
      style={style}
    >
      {children}
    </View>
  );
}
