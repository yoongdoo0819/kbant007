import { StyleSheet, Alert, Pressable, SafeAreaView, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import MyIcon from '../../../storybook/stories/components/Icon/MyIcon';
import { setBoardInfo, updateBoardAxios } from '../api/restAPI';
import { useMutation } from '@tanstack/react-query';

export default function MyBoard({ route }) {
  const id = route.params.id;
  const idx = route.params.idx;
  //   const title = route.params.title;
  //   const content = route.params.content;
  const [title, setTitle] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);
  const updateBoardMutation = useMutation(updateBoardAxios);

  const updateBoard = () => {
    console.log('idx : ', idx);
    console.log('title : ', title);
    console.log('content : ', content);

    const result = setBoardInfo(title, content);

    if (result._j !== true) {
      Alert.alert('empty title or content');
    } else {
      updateBoardMutation.mutate(
        { id, idx, title, content },
        {
          onSuccess: (data, variables, context) => {
            console.log(data);
            console.log(context);
            console.log('variables ', variables);

            if (data.status == 200) {
              Alert.alert('Board Update Success', 'OK');
            } else {
              Alert.alert('Board Update Failed');
            }
          },
        },
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
        }}>
        <MyTextInput value={title} setState={setTitle}></MyTextInput>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            height: 300,
          }}
          value={content}
          multiline={true}
          onChangeText={text => setContent(text)}></TextInput>
      </View>
      <View
        style={{
          width: '80%',
        }}>
        <MyButton title={'Update'} buttonColor={'rgb(214, 230, 245)'} onpress={updateBoard}></MyButton>
      </View>
      <View
        style={{
          width: '20%',
        }}>
        <Pressable>
          <MyIcon></MyIcon>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    //width: '90%',
  },
});
