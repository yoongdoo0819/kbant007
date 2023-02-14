import { StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { AsyncStorageExample } from '../AsyncStorageExample';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import { useNavigation } from '@react-navigation/native';
import LogoSrc from '../logo.png';
import { useMutation } from '@tanstack/react-query';
import { setSignUpInfo, signUpAxios } from '../api/restAPI';

export default function SignUp({}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const signUpMutation = useMutation(['signUpMutation'], signUpAxios);

  const signUp = async () => {
    //navigation.navigate('SignUp');
    //testUseReactQuery();
    console.log('signUp page');

    const result = setSignUpInfo(id, password);
    let signInId;

    if (result._j === true) {
      console.log('Not empty id & password');
    } else {
      Alert.alert('Empty ID or Password');
      return;
    }

    signUpMutation.mutate(
      { id, password },
      {
        onSuccess: (data, variables, context) => {
          console.log('variables ', variables);
          //navigation.setParams({ signInId: variables.id });
          signInId = variables.id;
          Alert.alert('SignUp Success', 'OK', [
            {
              onPress: () => navigation.navigate('Index'),
            },
          ]);
        },
        onError: (data, variables, context) => {
          Alert.alert('SignUp Failed');
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Image style={styles.logo} source={LogoSrc} />

      <View>
        <MyTextInput
          placeholder={'id'}
          keyboardType="email-address"
          secureTextEntry={false}
          setState={setId}
          width={200}></MyTextInput>
        <MyTextInput
          placeholder={'password'}
          keyboardType="default"
          secureTextEntry={true}
          setState={setPassword}
          width={200}></MyTextInput>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton title={'Submit'} buttonColor={'rgb(214, 230, 245)'} onpress={signUp}></MyButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
