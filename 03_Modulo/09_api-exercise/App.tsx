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
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Título: {item.title}</Text>
      <Text>Conteúdo: {item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({});