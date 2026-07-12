import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// @ts-ignore
const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 90 },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Profile;
