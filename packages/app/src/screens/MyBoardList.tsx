import { StyleSheet, Alert } from 'react-native';
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { queryMyBoardListReactQuery, queryMyBoardListAxios } from '../api/restAPI';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

export default function MyBoardList({ route }) {
  const navigation = useNavigation();
  const myBoardListMutation = useMutation(queryMyBoardListReactQuery);
  const { id } = route.params;

  //queryMyBoardListAxios('q');
  // const { data } = useQuery(['queryMyBoardListAxios'], queryMyBoardListReactQuery);
  // console.log({ data });

  // useEffect(() => {}, []);

  useEffect(() => {
    myBoardListMutation.mutate(
      { id },
      {
        onSuccess: (data, variables, context) => {
          console.log('>> ', data);
          //console.log(context);
          //console.log('variables ', variables);

          if (data.status == 200) {
            Alert.alert('Board Store Success', 'OK');
          } else {
            Alert.alert('Board Store Failed');
          }
        },
      },
    );
  }, []);

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
  return (
    <View style={styles.container}>
      <Text>a</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
