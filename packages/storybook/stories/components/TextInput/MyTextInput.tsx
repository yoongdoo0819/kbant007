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
import React, { useState } from 'react';
import { Pressable, PressableProps, Text, TextProps, View, Button, TouchableOpacity, Alert } from 'react-native';
import { StyledPrimaryText, StyledComponentText } from '../Button/Button.styles';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function MyTextInput({ placeholder, keyboardType, secureTextEntry, setState, width }) {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        //autoCapitalize="words"
        keyboardAppearance="default"
        secureTextEntry={secureTextEntry}
        onChangeText={text => setState(text)}
        //inlineImageLeft="images"
        style={{
          marginTop: 10,
          //   marginBottom: 10,
          paddingHorizontal: 10,
          height: 40,
          width: width,
          borderRadius: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}></TextInput>
    </SafeAreaView>
  );
}
