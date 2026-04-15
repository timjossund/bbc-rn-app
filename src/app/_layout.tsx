import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2f2f2f" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen name="families" options={{ title: "Families" }} />
      <Stack.Screen name="prayer" options={{ title: "Prayer List" }} />
    </Stack>
  );
}
