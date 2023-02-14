import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import MyInputFloatingActionButton from '../../../storybook/stories/components/InputFloatingActionButton/MyInputFloatingActionButton';
import { testUseReactQuery } from '../api/react-queryAPI';
import { isDev } from '../config';
import { testUseMutation } from '../api/mutateAPI';

export default function SignIn({}) {
  const { data } = testUseReactQuery();

  if (data) {
    return (
      <View style={styles.container}>
        <Text>{data.id}</Text>
        <Text>{data.password}</Text>
        <MyInputFloatingActionButton></MyInputFloatingActionButton>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>None</Text>
        <MyInputFloatingActionButton></MyInputFloatingActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
