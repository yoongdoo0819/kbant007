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
import { handleSubmit, loginMutation, testAxios2, testUseMutation, useMutationHandler } from '../api/mutateAPI';

const queryClient = new QueryClient();

export default function Index({}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const loginMutation = useMutation(['test'], testAxios2);

  const signUp = () => {
    navigation.navigate('SignUp');
    //testUseReactQuery();
    restApi();
  };

  const signIn = () => {
    const result = auth(id, password);
    loginMutation.mutate();

    console.log(result._j);
    if (result._j === true) {
      Alert.alert('Login Success', 'OK', [
        {
          onPress: () => navigation.navigate('SignIn'),
        },
      ]);
    } else {
      Alert.alert('Login Failed');
    }
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
