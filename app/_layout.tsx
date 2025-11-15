import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Metals" }} />
      <Stack.Screen name="details/[metal]" options={{ title: "Metal Details" }} />
    </Stack>
  );
}
