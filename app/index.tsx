import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>

      <Link href="/details/gold" asChild>
        <TouchableOpacity>
          <Text style={{ marginTop: 20 }}>Go to Gold Details</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
