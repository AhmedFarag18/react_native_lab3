import { View, Text, StyleSheet } from 'react-native'

const UserAddress = ({ user }) => {
  return (
    <View style={styles.tabContent}>
      <Text>Street: {user.address.street}</Text>
      <Text>City: {user.address.city}</Text>
      <Text>Zipcode: {user.address.zipcode}</Text>
      <Text>Geo: {user.address.geo.lat}, {user.address.geo.lng}</Text>
    </View>
  )
}

export default UserAddress;


const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
