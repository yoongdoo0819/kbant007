import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';

export default function SignUp({}) {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
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
