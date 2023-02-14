import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import MyInputFloatingActionButton from '../../../storybook/stories/components/InputFloatingActionButton/MyInputFloatingActionButton';
import { queryMemberReactQuery } from '../api/restAPI';
import { useNavigation } from '@react-navigation/native';

export default function SignIn({ route }) {
  //const { data } = queryMemberReactQuery('ID');
  const navigation = useNavigation();
  const { id } = route.params;
  console.log('login success : ', { id });

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <MyInputFloatingActionButton></MyInputFloatingActionButton>
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
