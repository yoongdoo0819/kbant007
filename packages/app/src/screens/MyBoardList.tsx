import { StyleSheet, Alert, Pressable } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { queryMyBoardListReactQuery, queryMyBoardListAxios } from '../api/restAPI';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

export default function MyBoardList({ route }) {
  const navigation = useNavigation();
  const myBoardListMutation = useMutation(queryMyBoardListReactQuery);
  const { id } = route.params;
  const [boards, setBoards] = useState('');

  //queryMyBoardListAxios('q');
  // const { data } = useQuery(['queryMyBoardListAxios'], queryMyBoardListReactQuery);
  // console.log({ data });

  // useEffect(() => {}, []);

  const boardEvent = (idx: string, title: string, content: string) => {
    console.log('hi');
    console.log(idx);
    console.log(title);
    console.log(content);
    navigation.navigate('MyBoard', { id: id, idx: idx, title: title, content: content });
  };

  useEffect(() => {
    myBoardListMutation.mutate(
      { id },
      {
        onSuccess: (data, variables, context) => {
          console.log('>> ', data);
          console.log('data.data >>', data.data);
          //console.log(context);
          //console.log('variables ', variables);

          if (data.status == 200) {
            //Alert.alert('Board Store Success');

            console.log(boards);

            if (boards === '') {
              setBoards(
                data.data.map(board => (
                  <View
                    style={{
                      width: '90%',
                    }}>
                    <Pressable onPress={() => boardEvent(board.idx, board.title, board.content)}>
                      <Text
                        style={{
                          //borderWidth: 0.5,
                          borderTopWidth: 0.3,
                          borderBottomWidth: 0.3,
                          padding: 10,
                          //        margin: 10,
                          //width: '90%',
                        }}>
                        {board.idx}. {board.title}
                      </Text>
                    </Pressable>
                  </View>
                )),
              );
            }
          } else {
            Alert.alert('Board Store Failed');
          }
        },
      },
    );
  }, [boards]);

  //const { data } = queryMyBoardListReactQuery('q');

  // console.log(data[0].idx);
  // const idx = data[0].idx;
  // const title = data[0].title;
  // const content = data[0].content;

  // const boards = data.map(board => (
  //   <Text
  //     style={{
  //       //borderWidth: 0.5,
  //       borderTopWidth: 0.3,
  //       borderBottomWidth: 0.3,
  //       padding: 10,
  //       //        margin: 10,
  //       width: '90%',
  //     }}>
  //     {board.idx}. {board.title}
  //   </Text>
  // ));

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
