import { globalStyles } from "@/styles/global";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const families = () => {
  interface Family {
    id: number;
    name: string;
  }

  interface FamilyMember {
    id: number;
    name: string;
    family_id: number;
  }

  const [families, setFamilies] = useState<Family[]>([]);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  useEffect(() => {
    const fetchFamilies = async () => {
      const response = await axios.get(
        "http://bbc-laravel-api.test/api/families",
      );
      setFamilies(response.data);
    };
    fetchFamilies();
    const familyMembers = async () => {
      const response = await axios.get(
        "http://bbc-laravel-api.test/api/members",
      );
      setFamilyMembers(response.data);
    };
    familyMembers();
  }, []);

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      {families.map((family) => (
        <View key={family.id} style={globalStyles.postCard}>
          <Text style={globalStyles.fontColorLightBoldMedium}>
            {family.name}
          </Text>
          <Text style={globalStyles.fontColorLight}>
            {familyMembers
              .filter((member) => member.family_id === family.id)
              .map((member) => member.name)
              .join(", ")}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default families;
