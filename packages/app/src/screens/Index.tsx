import React, { useState } from 'react';
import { SafeAreaView, Image, View, Alert } from 'react-native';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import { AsyncStorageExample } from '../AsyncStorageExample';
import LogoSrc from '../logo.png';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../api/auth';
import restApi from '../api/restAPI';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMutation, useQuery } from '@tanstack/react-query';
import { testAxios, testUseReactQuery } from '../api/react-queryAPI';
import { setSignUpInfo, signUpAxios } from '@kbant/app/src/api/restAPI';

const queryClient = new QueryClient();

export default function Index({}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  //const { mutate, isLoading, isError, error, isSuccess }
  const loginMutation = useMutation(['loginMutation'], signUpAxios);

  const signUp = async () => {
    navigation.navigate('SignUp');
    //testUseReactQuery();
  };

  const signIn = () => {
    //const result = auth(id, password);
    const result = setSignUpInfo(id, password);
    let signInId;

    if (result._j === true) {
      console.log('Not empty id & password');
    }

    loginMutation.mutate(
      { id, password },
      {
        onSuccess: (data, variables, context) => {
          console.log('variables ', variables);
          //navigation.setParams({ signInId: variables.id });
          signInId = variables.id;
          Alert.alert('Login Success', 'OK', [
            {
              onPress: () => navigation.navigate('SignIn', { id: signInId }),
            },
          ]);
        },
        onError: (data, variables, context) => {
          Alert.alert('Login Failed');
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Image style={styles.logo} source={LogoSrc} />

      <View>
        <AsyncStorageExample />
      </View>
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
        <MyButton title={'SignUp'} buttonColor={'rgb(214, 230, 245)'} onpress={signUp}></MyButton>
        <MyButton title={'SignIn'} buttonColor={'rgb(214, 230, 245)'} onpress={signIn}></MyButton>
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
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  platformRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  platformBackground: {
    backgroundColor: '#ececec',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d4d4',
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
