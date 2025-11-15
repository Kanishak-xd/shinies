import { ScrollView, Text, View } from "react-native";
import MetalTile from "./components/MetalTile";

export default function Home() {
  console.log("HOME SCREEN LOADED");
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black top-0 mt-0 pt-0">
      <View className="flex-1 bg-white dark:bg-black px-4">
        <Text className="text-2xl text-neutral-600 dark:text-neutral-400 font-bold my-6">Live Metal Prices</Text>
        <MetalTile metal="gold" />
        <MetalTile metal="silver" />
        <MetalTile metal="platinum" />
        <MetalTile metal="palladium" />
      </View>
    </ScrollView>
  );
}
