import { globalStyles } from "@/styles/global";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  interface Post {
    id: number;
    title: string;
    body: string;
    created_at: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://bbc-laravel-api.test/api/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      {posts.map((post) => (
        <View key={post.id} style={globalStyles.homePostCard}>
          <View style={globalStyles.homePostCardHeader}>
            <Text style={{ marginBottom: 5, color: "white", fontSize: 12 }}>
              Posted: 04/17/2026
            </Text>
            <Text style={globalStyles.homePostCardTitle}>{post.title}</Text>
          </View>
          <Text style={globalStyles.homePostCardBody}>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
