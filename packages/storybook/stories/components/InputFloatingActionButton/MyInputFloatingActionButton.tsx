import { styled } from 'nativewind';
import { ReactNode, useState } from 'react';
import React from 'react';
import { Pressable, Text, View, Animated, useColorScheme, TextInput } from 'react-native';
import style from '../CenterView/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from '@react-native-material/core';
import { useRef } from 'react';
import MyTextInput from '../TextInput/MyTextInput';
import RestApi from '@kbant/app/src/api/restAPI';
import restApi from '@kbant/app/src/api/restAPI';

export default function MyInputFloatingActionButton() {
  const [isOpened, setIsOpened] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;

  const onPressButton = () => (isOpened ? close() : open());

  const open = () => {
    setIsOpened(true);
    Animated.timing(inputWidth, {
      toValue: 300,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  const close = () => {
    setIsOpened(false);
    Animated.timing(inputWidth, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  return (
    <>
      <Animated.View style={{ position: 'absolute', bottom: 40, right: 70, width: inputWidth }}>
        <TextInput
          style={{
            borderWidth: 1,
            height: 40,
          }}></TextInput>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
          width: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            console.log('onPressButton');
            onPressButton();
          }}>
          <View>
            <Text>
              <Icon name="folder-plus" size={60} color="black"></Icon>
            </Text>
          </View>
        </Pressable>
      </Animated.View>
    </>
  );
}
