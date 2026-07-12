import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Home;
