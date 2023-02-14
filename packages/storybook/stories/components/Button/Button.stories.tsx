import React from 'react';
import { Button } from '@kbant/app';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CenterView from '../CenterView';
import styles from '../CenterView/style';
import MyButton from './MyButton';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonBasic: ComponentStory<typeof Button> = args => (
  <CenterView>
    <MyButton title={'Button'} buttonColor={'rgb(214, 230, 245)'}></MyButton>
    <MyButton title={'Button'} buttonColor={'blue'}></MyButton>
    <MyButton title={'Button'} buttonColor={'green'}></MyButton>
  </CenterView>
);
