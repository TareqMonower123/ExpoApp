import { useEffect, useRef } from "react"
import { useWindowDimensions, View } from "react-native"
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet"
import { DrawerProps } from "./interface"

interface BottomSheetDrawerProps extends Omit<DrawerProps, "position"> {
  position: "bottom"
}

export function BottomSheetDrawer({
  open,
  onClose,
  size = 0.5,
  children,
  renderDrawerContent,
  drawerStyle,
  swipeEnabled = true,
}: BottomSheetDrawerProps) {
  const { height } = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = [`${size * 100}%`]

  useEffect(() => {
    if (open) {
      bottomSheetRef.current?.snapToIndex(0)
    } else {
      bottomSheetRef.current?.close()
    }
  }, [open])

  return (
    <View className="flex-1">
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={swipeEnabled}
        enableDynamicSizing={false}
        onClose={onClose}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="close"
          />
        )}
        backgroundStyle={[{ backgroundColor: "#0d1212" }, drawerStyle]}
        handleIndicatorStyle={{ backgroundColor: "#868f8e" }}
      >
        <BottomSheetView style={{ flex: 1 }}>
          {renderDrawerContent()}
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
