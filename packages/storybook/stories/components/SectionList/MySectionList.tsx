// import { styled } from 'nativewind';
// import { ReactNode } from 'react';
// import React from 'react';
// import { Pressable, PressableProps, Text, TextProps, View, Button, TouchableOpacity, Alert } from 'react-native';

// export default function MyTextInput({  }) {

//   return (

//   );
// }

import { styled } from 'nativewind';
import { ReactNode } from 'react';
import React from 'react';
import { Pressable, PressableProps, Text, TextProps, View, Button, TouchableOpacity, Alert } from 'react-native';
import { StyledPrimaryText, StyledComponentText } from '../Button/Button.styles';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { CustomSectionList } from '@kbant/app/src';

export default function MySectionList({}) {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <SafeAreaView>
      <CustomSectionList data={DATA}></CustomSectionList>
    </SafeAreaView>
  );
}
