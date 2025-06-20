import { FlatList, Text, View, StyleSheet } from 'react-native';
import useAlbums from '../hooks/useAlbums';

export default function AlbumsPage() {
  const { albums, loading, error } = useAlbums();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      )}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, backgroundColor: '#ddd', borderRadius: 8, marginBottom: 10 },
});
