import { DrawerProps } from "./interface";
import { SideDrawer } from "./side-drawer";
import { BottomSheetDrawer } from "./overlay-panel";

export function Drawer({ position, ...props }: DrawerProps) {
  if (position === "left" || position === "right") {
    return <SideDrawer position={position} {...props} />;
  }

  return <BottomSheetDrawer position={position} {...props} />;
}

export type { DrawerProps, DrawerPosition } from "./interface";
