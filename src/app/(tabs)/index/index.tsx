import { MarqueeOffer } from "@/components/marquee-offer";
import { BookingCard } from "@/components/booking-card";
import { PromoCard } from "@/components/promo-card";
import { HomeLocationCard } from "@/components/home-location-card";
import { PromoOfferCard } from "@/components/promo-offer-card";
import { View, Text, ScrollView, FlatList, useWindowDimensions } from "react-native";
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

const OFFERS = [
  {
    id: "1",
    backgroundColor: "#4a7a5a",
    headline: "50% OFF",
    description: "On your first sauna visit in Shared Sauna Graiguenamanagh",
  },
  {
    id: "2",
    backgroundColor: "#c47a5a",
    headline: "Buy 1 Get 1",
    description: "Free entry for a friend on any Wednesday session",
  },
  {
    id: "3",
    backgroundColor: "#4a6a7a",
    headline: "20% OFF",
    description: "On all memberships when you sign up this month",
  },
];

export default function HomeScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScrollView className="flex-1 bg-bg">
      <MarqueeOffer text="Get 50% OFF memberships - Limited time offer!! Join Now" speed={1} />

      <View className="container-padding">
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
            itemHeight={340}
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
          <FlatList
            data={OFFERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth - 16}
            decelerationRate="fast"
            contentContainerStyle={{ paddingRight: 16 }}
            style={{ height: 200 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  width: screenWidth - 32,
                  height: 200,
                  marginRight: 16,
                }}
              >
                <PromoOfferCard
                  backgroundColor={item.backgroundColor}
                  headline={item.headline}
                  description={item.description}
                  onPress={() => {}}
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
