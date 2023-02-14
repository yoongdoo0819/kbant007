import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

import { queryMemberReactQuery } from '../api/restAPI';
import { useNavigation } from '@react-navigation/native';
import MyAnimationInput from '../../../storybook/stories/components/AnimationInput/MyAnimationInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';

export default function SignIn({ route }) {
  //const { data } = queryMemberReactQuery('ID');
  const navigation = useNavigation();
  const { id } = route.params;
  console.log('login success : ', { id });

  useEffect(() => {
    navigation.setOptions({ title: id });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MyAnimationInput></MyAnimationInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
