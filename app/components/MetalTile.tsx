import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { fetchMetalPrice } from "../../services/prices";

const metalImages: Record<string, any> = {
  gold: require("../../assets/images/gold.jpg"),
  silver: require("../../assets/images/silver.jpg"),
  platinum: require("../../assets/images/platinum.png"),
  palladium: require("../../assets/images/palladium.jpg"),
};

export default function MetalTile({ metal }: { metal: string }) {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState<number | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMetalPrice(metal);
        setPrice(data.price);
        setTimestamp(new Date(data.timestamp * 1000).toLocaleTimeString());
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <TouchableOpacity
        className="rounded-2xl bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden mb-5 shadow-sm"
        onPress={() => router.push(`/details/${metal}`)} activeOpacity={0.8}
    >
        <Image source={metalImages[metal]} className="w-full h-32" resizeMode="cover" />
        
        <View className="p-4 border-t-2 border-neutral-200 dark:border-neutral-800">
            {loading ? (
                <ActivityIndicator size="small" />
            ) : error ? (
                <Text className="text-red-500 font-medium">
                    Failed to load {metal}
                </Text>
            ) : (
            <>
                    <Text className="text-xl font-bold capitalize text-black dark:text-white">
                        {metal}
                    </Text>

                    <Text className="text-lg text-black dark:text-white mt-1">
                        ₹{price}
                    </Text>

                    <Text className="text-xs text-gray-500 mt-1">
                        Updated: {timestamp}
                    </Text>
            </>
            )}
        </View>
    </TouchableOpacity>
  );
}
