import { styled } from 'nativewind';
import { ReactNode } from 'react';
import React, { useState } from 'react';
import { Pressable, PressableProps, Text, TextProps, View, Button, TouchableOpacity, Alert } from 'react-native';
import { StyledPrimaryText, StyledComponentText } from '../Button/Button.styles';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyIcon({}) {
  return (
    <SafeAreaView>
      <View>
        <Text>
          <Icon name="folder-plus" size={70} color="black"></Icon>
        </Text>
      </View>
    </SafeAreaView>
  );
}
