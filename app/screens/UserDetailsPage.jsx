import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import useUserDetails from '../hooks/useUserDetails';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import UserCompany from '../components/UserCompany';
import UserAddress from '../components/UserAdress';
import { useState } from 'react';

export default function UserDetailsPage({ route }) {
  const { userId } = route.params;
  const { user, loading, error } = useUserDetails(userId);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'address', title: 'Address' },
    { key: 'company', title: 'Company' },
  ]);

  const renderScene = SceneMap({
    address: () => <UserAddress user={user} />,
    company: () => <UserCompany user={user} />,
  });

  if (!user || loading) return <Text style={{ padding: 20 }}>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
      </View>

      <View style={{ height: 250 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{ backgroundColor: 'purple', }}
              labelStyle={{ color: '#333' }}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%', backgroundColor: "white" },
  title: { fontWeight: 'bold', fontSize: 22, marginBottom: 10, color: '#01CCFA' },

  loading: { padding: 20 },
  error: { padding: 20, color: 'red' },
  basicInfo: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
