import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer as RNDrawer } from "react-native-drawer-layout";
import { DrawerProps } from "./interface";

interface SideDrawerProps extends Omit<DrawerProps, "position"> {
  position: "left" | "right";
}

export function SideDrawer({
  open,
  onOpen,
  onClose,
  position,
  size = 0.85,
  children,
  renderDrawerContent,
  drawerStyle,
  overlayStyle,
  swipeEnabled = true,
}: SideDrawerProps) {
  const { width } = useWindowDimensions();

  return (
    <RNDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      drawerPosition={position}
      drawerType="slide"
      drawerStyle={[{ width: width * size }, drawerStyle]}
      overlayStyle={overlayStyle}
      swipeEnabled={swipeEnabled}
      renderDrawerContent={() => (
        <SafeAreaView
          edges={
            position === "right"
              ? ["top", "right", "bottom"]
              : ["top", "left", "bottom"]
          }
          style={{ flex: 1, backgroundColor: "#0d1212" }}
        >
          {renderDrawerContent()}
        </SafeAreaView>
      )}
    >
      {children}
    </RNDrawer>
  );
}
