import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const families = () => {
  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <Text>families</Text>
    </ScrollView>
  );
};

export default families;
