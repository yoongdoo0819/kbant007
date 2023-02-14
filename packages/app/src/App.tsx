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

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

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
        </Stack.Navigator>
      </NavigationContainer>
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
