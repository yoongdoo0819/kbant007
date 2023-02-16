import { StyleSheet, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { queryAllBoardListReactQuery } from '../api/restAPI';
import MyTextInput from '../../../storybook/stories/components/TextInput/MyTextInput';

export default function AllBoardList({}) {
  const res = queryAllBoardListReactQuery();
  console.log(res);
  console.log(res._j.status);
  console.log('res data ', res._j.data.data);
  const [boards, setBoards] = useState('');
  // console.log(data[0].idx);
  // const idx = data[0].idx;
  // const title = data[0].title;
  // const content = data[0].content;

  useEffect(() => {
    if (res._j.status === 'success') {
      console.log('asdf');

      if (boards === '') {
        setBoards(
          res._j.data.data.map(board => (
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
          )),
        );
      }
    }
  }, [boards]);

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
