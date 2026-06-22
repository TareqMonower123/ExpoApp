import { View } from "react-native";
import { Drawer } from "@/components/drawer";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { UserPanel } from "@/layout/Header/sub-components/settings-panel";
import { useState } from "react";

export default function TabLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      position="bottom"
      size={0.8}
      renderDrawerContent={() => <UserPanel onClose={() => setOpen(false)} />}
    >
      <View className="flex-1 bg-bg">
        <Header onPressSettings={() => setOpen(true)} />
        <View className="flex-1">
          <Footer />
        </View>
      </View>
    </Drawer>
  );
}
