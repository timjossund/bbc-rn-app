import { globalStyles } from "@/styles/global";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("http://bbc-conway-api.test/api/posts");
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
                <View key={post.id} style={globalStyles.postCard}>
                    <Text style={globalStyles.fontColorLightBold}>{post.title}</Text>
                    <Text style={globalStyles.fontColorLight}>{post.body}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
