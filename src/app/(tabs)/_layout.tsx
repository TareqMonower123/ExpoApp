import { View } from "@/tw"
import { Header, Footer } from "@/layout"

export default function TabLayout() {
  return (
    <View className="flex-1 bg-bg">
      <Header />
      <View className="flex-1">
        <Footer />
      </View>
    </View>
  )
}
