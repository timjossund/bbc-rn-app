import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <Text>DUDE</Text>
      <Link href="/families" style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Go to Families List</Text>
      </Link>
      <Link href="/prayer" style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Go to Prayer List</Text>
      </Link>
      <Link href="/latest" style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Go to Latest Updates</Text>
      </Link>
    </ScrollView>
  );
}
