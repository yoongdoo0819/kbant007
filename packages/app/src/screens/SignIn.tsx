import { StyleSheet, Animated, TextInput, Pressable, SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import { queryMemberReactQuery } from '../api/restAPI';
import { useNavigation } from '@react-navigation/native';
import MyAnimationInput from '../../../storybook/stories/components/AnimationInput/MyAnimationInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import { Button } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcon from '../../../storybook/stories/components/Icon/MyIcon';

export default function SignIn({ route }) {
  //const { data } = queryMemberReactQuery('ID');
  const navigation = useNavigation();
  const [isOpened, setIsOpened] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;
  const inputHeight = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;

  const { id } = route.params;
  console.log('login success : ', { id });

  useEffect(() => {
    navigation.setOptions({ title: id });
  }, [navigation]);

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
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          //position: 'absolute',
          marginTop: 10,
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
          //position: 'absolute',
          //bottom: 200,
          //left: '5%',
          width: '100%',
          borderRadius: 30,
          //justifyContent: 'center',
          //alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '80%',
          }}>
          <MyButton title={'Text'} buttonColor={'rgb(214, 230, 245)'} onpress={onPressButton}></MyButton>
        </View>
        <View
          style={{
            width: '20%',
          }}>
          <Pressable onPress={onPressButton}>
            <MyIcon></MyIcon>
          </Pressable>
        </View>
      </Animated.View>
      <View
        style={{
          width: '100%',
        }}>
        <MyButton title={'List'} buttonColor={'rgb(214, 230, 245)'} onpress={onPressButton}></MyButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    height: '100%',
  },
});
