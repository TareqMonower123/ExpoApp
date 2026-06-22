import { ViewStyle } from "react-native";

export type DrawerPosition = "left" | "right" | "bottom";

export interface DrawerProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  position: DrawerPosition;
  size?: number;
  children: React.ReactNode;
  renderDrawerContent: () => React.ReactNode;
  drawerStyle?: ViewStyle;
  overlayStyle?: ViewStyle;
  swipeEnabled?: boolean;
}
