/**
 * Infinite horizontal marquee — scrolls text continuously with no gaps.
 *
 */

import { Text, View } from "react-native";
import { Marquee } from "@animatereactnative/marquee";
import { useReducedMotion } from "react-native-reanimated";
import { cn } from "@/lib/cn";

interface MarqueeOfferProps {
  /** Text to scroll. If omitted/falsy, component renders nothing. */
  text?: string;
  /** Separator between repeated text copies. */
  separator?: string;
  /** Scroll velocity multiplier (library units). Higher = faster. */
  speed?: number;
  /** Extra blank gap (px) between repeated copies, on top of `separator`. */
  spacing?: number;
  /** Tailwind classes on the outer container. */
  className?: string;
  /** Tailwind classes on the inner text element. */
  textClassName?: string;
}

export function MarqueeOffer({
  text,
  separator = "  •  ",
  speed = 1,
  spacing = 0,
  className,
  textClassName,
}: MarqueeOfferProps) {
  const reduceMotion = useReducedMotion();

  if (!text) return null;

  const content = (
    <Text
      numberOfLines={1}
      className={cn(
        "text-black text-md font-secondary leading-5",
        textClassName,
      )}
    >
      {text}
      {separator}
    </Text>
  );

  return (
    <View
      className={cn(
        "w-full h-11 bg-accent justify-center overflow-hidden",
        className,
      )}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      {reduceMotion ? (
        content
      ) : (
        <Marquee speed={speed} spacing={spacing} direction="horizontal">
          {content}
        </Marquee>
      )}
    </View>
  );
}
