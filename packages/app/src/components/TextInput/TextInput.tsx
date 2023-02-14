import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const TextInput = (...props) => (
  <View style={styles.buttonContainer}>
    <TextInput {...props}></TextInput>
  </View>
);
