import { useState } from "react"
import { Drawer } from "@/components/drawer"
import { View } from "@/tw"
import { Header } from "@/layout/Header"
import { Footer } from "@/layout/Footer"
import { SettingsPanel } from "@/layout/Header/sub-components/settings-panel"

export default function TabLayout() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      position="bottom"
      size={0.80}
      renderDrawerContent={() => (
        <SettingsPanel onClose={() => setOpen(false)} />
      )}
    >
      <View className="flex-1 bg-bg">
        <Header onPressSettings={() => setOpen(true)} />
        <View className="flex-1">
          <Footer />
        </View>
      </View>
    </Drawer>
  )
}
