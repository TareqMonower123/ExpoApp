import { View } from "react-native";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  variant?: "default" | "promo";
  padding?: "normal" | "none";
  className?: string;
  children: ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
}: CardProps) {
  return (
    <View
      className={cn(
        variant === "default" && "bg-card",
        variant === "promo" && "bg-accent",
        className,
      )}
    >
      {children}
    </View>
  );
}
