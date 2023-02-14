import { NativeWindStyleSheet, StyledComponent, styled } from 'nativewind';
import tw from 'twin.macro';
import { Text } from 'react-native';
import classNames from 'classnames';
// import styled from 'styled-components/native';
import { Children, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonColor } from './MyButton';

interface VariantStyles {
  [key: string]: string;
}

export const variantStyles: VariantStyles = {
  primary: 'text-black bg-blue-500 primaryCss',
  secondary: 'bg-red-500 text-white',
};

export const buttonStyles = (variant: string) => classNames(`py-4 text-xl font-bold`, variantStyles[variant]);

interface TextProps {
  variant: string;
  children: ReactNode;
}

export const StyledPrimaryText = styled(Text, buttonStyles('primary'));

export function StyledComponentText({ variant, children }: TextProps) {
  return (
    <StyledComponent component={Text} className={buttonStyles(variant)}>
      {children}
    </StyledComponent>
  );
}

NativeWindStyleSheet.create({
  styles: {
    primaryCss: {
      marginBottom: 20,
    },
  },
});

export const buttonStyle = StyleSheet.create({
  styles: {
    //borderWidth: 1,
    //borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
});
