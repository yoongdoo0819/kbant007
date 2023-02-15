import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';

export default function List({}) {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
