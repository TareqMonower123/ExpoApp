import { MarqueeOffer } from "@/components/marquee-offer";
import { BookingCard } from "@/components/booking-card";
import { PromoCard } from "@/components/promo-card";
import { HomeLocationCard } from "@/components/home-location-card";
import { View, Text, ScrollView } from "react-native";
import { Coffee } from "lucide-react-native";
import { Carousel } from "@/components/carousel";

const LOCATIONS = [
  {
    id: "1",
    imageUri: "https://picsum.photos/seed/bective-mill/900/700",
    title: "Bective Mill House",
    address: "Navan, Co. Meath. C15H519",
  },
  {
    id: "2",
    imageUri: "https://picsum.photos/seed/location-two/900/700",
    title: "The Woodlands Spa",
    address: "Dublin, Ireland",
  },
  {
    id: "3",
    imageUri: "https://picsum.photos/seed/location-three/900/700",
    title: "Seaside Retreat",
    address: "Galway, Ireland",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-bg">
      <MarqueeOffer text="Get 50% OFF memberships - Limited time offer!! Join Now" speed={1} />

      <View className="container">
        {/* intro cards */}
        <View className="flex-row w-full gap-5 h-50">
          <BookingCard
            className="flex-1"
            time="11.00"
            period="AM"
            venue="Inchicore Sauna Village"
            date="Tue, 11 Mar"
            guests={3}
            onGetDirection={() => {}}
          />
          <PromoCard
            className="flex-1"
            icon={Coffee}
            title="Artisan Coffee"
            points="1000"
            pointsLabel="Points to get"
          />
        </View>

        {/* Booking Cards */}
        <View className="mt-7">
          <View className="flex-row items-center gap-2 mb-3">
            <View className="w-0.75 h-4 bg-accent rounded-full" />
            <Text className="text-muted text-sm">Home Location</Text>
          </View>
          <Carousel
            data={LOCATIONS}
            renderItem={({ item }) => (
              <HomeLocationCard
                imageUri={item.imageUri}
                title={item.title}
                address={item.address}
                onPressPin={() => {}}
                onPressBook={() => {}}
              />
            )}
            autoPlay
            loop
            autoPlayInterval={5000}
          />
        </View>

        {/* Offers & Promotion */}
        <View className="mt-7">
          <View className="flex-row items-center gap-2 mb-3">
            <View className="w-0.75 h-4 bg-accent rounded-full" />
            <Text className="text-muted text-sm">Offers & Promotions</Text>
          </View>
          <Carousel
            data={LOCATIONS}
            renderItem={({ item }) => (
              <HomeLocationCard
                imageUri={item.imageUri}
                title={item.title}
                address={item.address}
                onPressPin={() => {}}
                onPressBook={() => {}}
              />
            )}
            autoPlay
            loop
            autoPlayInterval={5000}
          />
        </View>

        <View className="mt-7">
          <View className="flex-row items-center gap-2 mb-3">
            <View className="w-0.75 h-4 bg-accent rounded-full" />
            <Text className="text-muted text-sm">Offers & Promotions</Text>
          </View>
          <Carousel
            data={LOCATIONS}
            renderItem={({ item }) => (
              <HomeLocationCard
                imageUri={item.imageUri}
                title={item.title}
                address={item.address}
                onPressPin={() => {}}
                onPressBook={() => {}}
              />
            )}
            autoPlay
            loop
            autoPlayInterval={5000}
          />
        </View>

        <View className="mt-7">
          <View className="flex-row items-center gap-2 mb-3">
            <View className="w-0.75 h-4 bg-accent rounded-full" />
            <Text className="text-muted text-sm">Offers & Promotions</Text>
          </View>
          <Carousel
            data={LOCATIONS}
            renderItem={({ item }) => (
              <HomeLocationCard
                imageUri={item.imageUri}
                title={item.title}
                address={item.address}
                onPressPin={() => {}}
                onPressBook={() => {}}
              />
            )}
            autoPlay
            loop
            autoPlayInterval={5000}
          />
        </View>
      </View>
    </ScrollView>
  );
}
