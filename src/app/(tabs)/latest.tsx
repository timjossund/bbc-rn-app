import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const latest = () => {
  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <Text>Latest Updates</Text>
    </ScrollView>
  );
};

export default latest;
