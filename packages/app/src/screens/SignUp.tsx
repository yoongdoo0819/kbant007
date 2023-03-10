import { StyleSheet, SafeAreaView, Image, Alert, Button } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AsyncStorageExample } from '../AsyncStorageExample';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import { useNavigation } from '@react-navigation/native';
import LogoSrc from '../logo.png';
import { useMutation } from '@tanstack/react-query';
import { setSignUpInfo, signUpAxios } from '../api/restAPI';
import MyIcon from '../../../storybook/stories/components/Icon/MyIcon';
import { KaikasWeb3Provider } from '@klaytn/kaikas-web3-provider';

export default function SignUp({}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const signUpMutation = useMutation(signUpAxios);
  /*
  useEffect(() => {
    navigation.setOptions({ headerRight: () => MyIcon });
  }, [navigation]);
*/

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
          //navigation.setParams({ signInId: variables.id });
          console.log(data);
          console.log(context);
          console.log('variables ', variables);

          if (data == 200) {
            signInId = variables.id;
            Alert.alert('SignUp Success', 'OK', [
              {
                onPress: () => navigation.navigate('Index'),
              },
            ]);
          } else {
            Alert.alert('SignUp Failed');
          }
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
        <MyButton title={'Submit'} buttonColor={'rgb(214, 230, 245)'} onpress={signUp} width={100}></MyButton>
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
