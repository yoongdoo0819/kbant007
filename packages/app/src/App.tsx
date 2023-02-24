import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { subplatform } from './config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Index from './screens/Index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import restApi from './api/restAPI';
import { useQuery } from 'react-query';
import MyIcon from '../../storybook/stories/components/Icon/MyIcon';
import MyAnimationInput from '../../storybook/stories/components/AnimationInput/MyAnimationInput';
import AllBoardList from './screens/AllBoardList';
import MyBoardList from './screens/MyBoardList';
import MyBoard from './screens/MyBoard';

import Web3 from 'web3';
import Web3Modal from 'web3modal';

import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
//import detectEthereumProvider from '@metamask/detect-provider';

import '@ethersproject/shims';
import { ethers } from 'ethers';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'React Native Test Dapp',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);

const sendTransaction = async () => {
  const to = '0x0000000000000000000000000000000000000000';
  const transactionParameters = {
    to, // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    value: '0x0000000001', // Only required to send ether to the recipient from the initiating external account.
  };

  try {
    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    //setResponse(txHash);
    console.log('tx hash : ', txHash);
  } catch (e) {
    console.log(e);
  }
};

const getBalance = async () => {
  if (!ethereum.selectedAddress) {
    return;
  }
  const bal = await provider.getBalance(ethereum.selectedAddress);
  console.log(bal);
  //setBalance(ethers.utils.formatEther(bal));
};

const connect = async () => {
  try {
    console.log('START!!!');
    const result = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('RESULT', result?.[0]);
    //setAccount(result?.[0]);
    getBalance();
  } catch (e) {
    console.log('ERROR', e);
  }
};

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: '#ffff' },
          }}>
          <Stack.Screen name={'Index'} component={Index} options={{ headerShown: false }} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen
            name={'SignIn'}
            component={SignIn}
            options={{ headerBackVisible: false /*headerRight: MyIcon*/ }}
          />
          <Stack.Screen name={'AllBoardList'} component={AllBoardList} />
          <Stack.Screen name={'MyBoardList'} component={MyBoardList} />
          <Stack.Screen name={'MyBoard'} component={MyBoard} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button title="connect" onPress={connect} />
      <Button title="Send transaction" onPress={sendTransaction} />
    </QueryClientProvider>
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
