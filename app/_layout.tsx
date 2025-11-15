import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";

export default function RootLayout() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "black" : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : "black",
          fontWeight: "bold"
        },
        headerTintColor: isDark ? "white" : "black",
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "METALS" }} />
      <Stack.Screen name="details/[metal]" options={{ title: "Metal Details" }} />
    </Stack>
  );
}
