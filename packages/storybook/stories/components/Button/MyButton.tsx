import { styled } from 'nativewind';
import { ReactNode } from 'react';
import React from 'react';
import { Pressable, PressableProps, Text, TextProps, View, Button, TouchableOpacity, Alert } from 'react-native';
import { StyledPrimaryText, StyledComponentText } from './Button.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MyButtonProps extends PressableProps {
  variant: string;
  style?: TextProps['style'];
  children: ReactNode;
}

export default function MyButton({ title, buttonColor, onpress, width }) {
  const ButtonColor = { RED: 'red', BLUE: 'blue', GREEN: 'green' };

  const onSubmit = () => {
    Alert.alert('Hello');
  };

  return (
    <TouchableOpacity
      style={{
        //borderWidth: 1,
        //borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: 50,
        backgroundColor: buttonColor,
        borderRadius: 5,
        margin: 10,
      }}
      onPress={onpress}>
      {/* <Button title="Hello" color="#01a699" /> */}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
