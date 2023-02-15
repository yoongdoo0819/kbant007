import { StyleSheet, Animated, TextInput, Pressable, SafeAreaView, Alert } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import { queryMemberReactQuery, setBoardInfo, storeBoardAxios } from '../api/restAPI';
import { useNavigation } from '@react-navigation/native';
import MyAnimationInput from '../../../storybook/stories/components/AnimationInput/MyAnimationInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import { Button } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcon from '../../../storybook/stories/components/Icon/MyIcon';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import { useMutation } from '@tanstack/react-query';

export default function SignIn({ route }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;
  const inputHeight = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const storeBoardMutation = useMutation(storeBoardAxios);

  const { id } = route.params;
  console.log('login success : ', { id });

  const storeBoard = () => {
    //const result = auth(id, password);
    const result = setBoardInfo(title, content);
    let idx;

    if (result._j !== true) {
      Alert.alert('empty title or content');
    } else {
      storeBoardMutation.mutate(
        { id, title, content },
        {
          onSuccess: (data, variables, context) => {
            console.log(data);
            console.log(context);
            console.log('variables ', variables);
            idx = variables.idx;

            if (data.status == 200) {
              Alert.alert('Board Store Success', 'OK');
            } else {
              Alert.alert('Board Store Failed');
            }
          },
        },
      );
    }
  };

  const moveAllBoardList = () => {
    navigation.navigate('AllBoardList');
  };

  const moveMyBoardList = () => {
    navigation.navigate('MyBoardList', { id: id });
  };

  useEffect(() => {
    navigation.setOptions({ title: id });
  }, []);

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
          marginTop: 0,
          left: '5%',
          //width: inputWidth,
          width: '90%',
          opacity: animation,
        }}>
        <MyTextInput placeholder="title" setState={setTitle}></MyTextInput>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            //left: '5%',
            height: 300,
            //width: '90%',
            //height: ,
          }}
          placeholder="content"
          multiline={true}
          onChangeText={text => setContent(text)}></TextInput>
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
          <Pressable onPress={storeBoard}>
            <MyIcon></MyIcon>
          </Pressable>
        </View>
      </Animated.View>
      <View
        style={{
          width: '100%',
        }}>
        <MyButton title={'All Board List'} buttonColor={'rgb(214, 230, 245)'} onpress={moveAllBoardList}></MyButton>
        <MyButton title={'My Board List'} buttonColor={'rgb(214, 230, 245)'} onpress={moveMyBoardList}></MyButton>
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
