import React from 'react';
import { Button } from '@kbant/app';
import { TextInput } from '@kbant/app';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CenterView from '../CenterView';
import styles from '../CenterView/style';
import MyTextInput from './MyTextInput';

export default {
  title: 'components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Template: ComponentStory<typeof TextInput> = args => (
  <CenterView>
    <MyTextInput placeholder="input" secureTextEntry={false}></MyTextInput>
  </CenterView>
);
