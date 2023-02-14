import { styled } from 'nativewind';
import { ReactNode, useState } from 'react';
import React from 'react';
import {
  Pressable,
  Text,
  View,
  Animated,
  useColorScheme,
  TextInput,
  Textarea,
  SafeAreaView,
  Button,
} from 'react-native';
import style from '../CenterView/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from '@react-native-material/core';
import { useRef } from 'react';
import MyTextInput from '../TextInput/MyTextInput';
import RestApi from '@kbant/app/src/api/restAPI';
import restApi from '@kbant/app/src/api/restAPI';
import MyButton from '../Button/MyButton';

export default function MyAnimationInput() {
  const [isOpened, setIsOpened] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;
  const inputHeight = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;

  const onPressButton = () => {
    isOpened ? close() : open();
  };

  const open = () => {
    setIsOpened(true);
    /*
  Animated.timing(inputWidth, {
    toValue: 300,
    useNativeDriver: false,
    duration: 300,
  }).start();

  Animated.timing(inputHeight, {
    toValue: 300,
    useNativeDriver: false,
    duration: 300,
  }).start();
*/
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  const close = () => {
    setIsOpened(false);
    /*
  Animated.timing(inputWidth, {
    toValue: 0,
    useNativeDriver: false,
    duration: 300,
  }).start();
  Animated.timing(inputHeight, {
    toValue: 0,
    useNativeDriver: false,
    duration: 300,
  }).start();
*/
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 40,
          //left: 30,
          //width: inputWidth,
          width: '100%',
          opacity: animation,
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            //height: , // == 0 ? 30 : inputHeight,
            left: '5%',
            height: 400,
            width: '90%',
            //height: ,
          }}
          multiline={true}></TextInput>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 200,
          left: '5%',
          width: '100%',
          borderRadius: 30,
          //justifyContent: 'center',
          //alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '70%',
            marginTop: 10,
          }}>
          <Button title={'Text'} color={'rgb(214, 230, 245)'} onPress={onPressButton}></Button>
        </View>
        <View
          style={{
            width: '30%',
          }}>
          <Pressable onPress={onPressButton}>
            <Text>
              <Icon name="folder-plus" size={60} color="black"></Icon>
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}
