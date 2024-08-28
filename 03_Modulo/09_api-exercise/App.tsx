import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

type Item = {
  item: {
    id: number,
    title: string,
    body: string
  }
}

export default function App() {
  const [posts, setPosts] = useState(null)
  const fetchPostsJson = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPostsJson();
  }, []);

  if (!posts) {
    return <Text>Loading...</Text>
  }

  const renderPost = ({ item }: Item) => (
    <View style={styles.postContainer}>
      <Text>ID: {item.id}</Text>
      <Text style={styles.textTitle}>Título: {item.title}</Text>
      <Text style={styles.textContent}>Conteúdo: {item.body}</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderColor: "#BBBB",
    borderRadius: 5,
    margin: 10,
    padding: 16,
  },
  textTitle: {
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
  textContent: {
    fontWeight: "300",
    fontSize: 14,
  },
});