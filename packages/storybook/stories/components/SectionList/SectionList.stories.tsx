import React from 'react';
import { Button } from '@kbant/app';
import { TextInput } from '@kbant/app';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CenterView from '../CenterView';
import styles from '../CenterView/style';
import { CustomSectionList } from '@kbant/app';
import MySectionList from './MySectionList';

export default {
  title: 'components/SectionList',
  component: CustomSectionList,
} as ComponentMeta<typeof CustomSectionList>;

export const Template: ComponentStory<typeof CustomSectionList> = args => (
  <CenterView>
    <MySectionList></MySectionList>
  </CenterView>
);
