import { StyleSheet, Alert, Pressable, SafeAreaView, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import MyButton from '../../../storybook/stories/components/Button/MyButton';
import MyIcon from '../../../storybook/stories/components/Icon/MyIcon';

export default function MyBoard({ route }) {
  const id = route.params.id;
  const idx = route.params.idx;
  const title = route.params.title;
  const content = route.params.content;

  console.log(id);
  console.log(idx);
  console.log(title);
  console.log(content);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
        }}>
        <MyTextInput value={title}></MyTextInput>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            height: 300,
          }}
          value={content}
          multiline={true}></TextInput>
      </View>

      <View
        style={{
          width: '80%',
        }}>
        <MyButton title={'Update'} buttonColor={'rgb(214, 230, 245)'}></MyButton>
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
