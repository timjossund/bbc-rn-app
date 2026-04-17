import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const prayer = () => {
  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <Text style={globalStyles.fontColorLight}>Prayer List</Text>
    </ScrollView>
  );
};

export default prayer;
