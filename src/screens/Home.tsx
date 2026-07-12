import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// @ts-ignore
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Home;
