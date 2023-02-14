import { View, SectionList, StyleSheet, Text } from 'react-native';
import React from 'react';

export const CustomSectionList = ({ data }) => (
  <View>
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.main}>
          {/* <TextInput placeholder={item}></TextInput> */}
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.title}>{title}</Text>}></SectionList>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F08080',
    marginTop: 10,
    // padding: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
  text: {
    fontSize: 24,
  },
});
