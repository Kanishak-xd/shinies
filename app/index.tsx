import { ScrollView, Text, View } from "react-native";
import MetalTile from "./components/MetalTile";

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      <View className="flex-1 bg-white dark:bg-black px-4 pt-10">
        <Text className="text-2xl text-black dark:text-white font-bold my-6">Live Metal Prices</Text>
        <MetalTile metal="gold" />
        <MetalTile metal="silver" />
        <MetalTile metal="platinum" />
        <MetalTile metal="palladium" />
      </View>
    </ScrollView>
  );
}
