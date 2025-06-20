import { View, Text, StyleSheet } from 'react-native'

const UserCompany = ({ user }) => {
  return (
    <View style={styles.tabContent}>
      <Text>Name: {user.company.name}</Text>
      <Text>Catchphrase: {user.company.catchPhrase}</Text>
      <Text>Bs: {user.company.bs}</Text>
    </View>
  )
}

export default UserCompany;


const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
