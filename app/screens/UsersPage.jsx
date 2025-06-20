import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useUsers from '../hooks/useUsers';

export default function UsersPage({ navigation }) {
  const { users, loading, error } = useUsers();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
      style={styles.card}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF', padding: 15, marginBottom: 10,
    borderRadius: 8
  },
  name: { fontWeight: 'bold' },
});
