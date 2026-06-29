import { View, useWindowDimensions, type ViewStyle } from "react-native";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import type { CarouselRenderItem } from "react-native-reanimated-carousel";
import type { ILayoutConfig as ParallaxConfig } from "react-native-reanimated-carousel/lib/typescript/layouts/parallax";
import type { ILayoutConfig as StackConfig } from "react-native-reanimated-carousel/lib/typescript/layouts/stack";
import type { SharedValue } from "react-native-reanimated";

const DEFAULT_ITEM_HEIGHT = 340;

interface CarouselProps<T> {
  data: T[];
  renderItem: CarouselRenderItem<T>;
  itemWidth?: number;
  itemHeight?: number;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  autoPlayReverse?: boolean;
  scrollAnimationDuration?: number;
  pagingEnabled?: boolean;
  snapEnabled?: boolean;
  mode?: "parallax" | "horizontal-stack" | "vertical-stack";
  modeConfig?: ParallaxConfig | StackConfig;
  onProgressChange?: ((offsetProgress: number, absoluteProgress: number) => void) | SharedValue<number>;
  onSnapToItem?: (index: number) => void;
  onScrollStart?: () => void;
  onScrollEnd?: (index: number) => void;
  className?: string;
}

export function Carousel<T>({
  data,
  renderItem,
  itemWidth,
  itemHeight = DEFAULT_ITEM_HEIGHT,
  loop = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  autoPlayReverse,
  scrollAnimationDuration = 500,
  pagingEnabled = true,
  snapEnabled = true,
  mode,
  modeConfig,
  onProgressChange,
  onSnapToItem,
  onScrollStart,
  onScrollEnd,
  className,
}: CarouselProps<T>) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = itemWidth ?? screenWidth - 32;

  return (
    <View className={className}>
      <ReanimatedCarousel
        width={cardWidth}
        height={itemHeight}
        data={data}
        renderItem={renderItem}
        loop={loop}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        autoPlayReverse={autoPlayReverse}
        scrollAnimationDuration={scrollAnimationDuration}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        mode={mode as any}
        modeConfig={modeConfig as any}
        onProgressChange={onProgressChange}
        onSnapToItem={onSnapToItem}
        onScrollStart={onScrollStart}
        onScrollEnd={onScrollEnd}
      />
    </View>
  );
}
