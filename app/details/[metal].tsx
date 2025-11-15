import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { fetchMetalDetails } from "../../services/prices";

export default function MetalDetails() {
  const { metal } = useLocalSearchParams();
  const title = metal ? String(metal).toUpperCase() : "Details";

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchMetalDetails(String(metal));
        setData(result);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </View>
      ) : error || !data ? (
        <View className="flex-1 justify-center items-center bg-white dark:bg-black">
          <Text className="text-red-500">Failed to load details.</Text>
        </View>
      ) : (
        <View className="flex-1 bg-white p-6">
          <Text className="text-3xl font-bold capitalize mb-4">
            {metal} Details
          </Text>

          <Text className="text-lg">Price: ₹{data.price}</Text>
          <Text className="text-lg">Open: ₹{data.open_price}</Text>
          <Text className="text-lg">Previous Close: ₹{data.prev_close_price}</Text>
          <Text className="text-lg mt-2">
            Updated: {new Date(data.timestamp * 1000).toLocaleString()}
          </Text>
        </View>
      )}
    </>
  );
}
