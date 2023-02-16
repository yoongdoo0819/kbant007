import { StyleSheet, TextInput, Pressable } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { queryAllBoardListAxios, queryAllBoardListReactQuery } from '../api/restAPI';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';
import { useQuery } from '@tanstack/react-query';

export default function AllBoardList({ route }) {
  //const res = queryAllBoardListReactQuery();

  const { id } = route.params;
  const res = useQuery(['queryAllBoardListAxios'], queryAllBoardListAxios);
  let boards;

  const boardEvent = () => {
    console.log('hi');
  };

  console.log('>> ', res);
  if (res.status === 'success') {
    console.log('res data ', res.data.data);

    boards = res.data.data.map(board => (
      <View
        style={{
          width: '90%',
        }}>
        <Pressable onPress={boardEvent}>
          <Text
            style={{
              //borderWidth: 0.5,
              borderTopWidth: 0.3,
              borderBottomWidth: 0.3,
              padding: 10,
              //        margin: 10,
              width: '90%',
            }}>
            {board.idx}. {board.title}
          </Text>
        </Pressable>
      </View>
    ));
  }

  return <View style={styles.container}>{boards}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
  },
});
