import styled from 'styled-components/native';
import React from 'react';
import * as theme from '~/themes';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  elevation: 1;
  margin: ${theme.padding}px;
  padding: ${theme.padding}px;
  background-color: ${theme.light};
  box-shadow: ${theme.boxShadow};
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius}px;
  z-index: 3;
  border-width: 1px;
  border-color: ${theme.divider};
`;

export const Content = styled.View`
  padding-bottom: ${theme.padding}px;
  padding-horizontal: ${theme.padding}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.divider};
`;

export const StyledText = styled.Text`
  color: ${theme.fontColors.content};
`;

export const ButtonContainer = styled.View`
  padding-top: ${theme.padding}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: ${theme.paddingSmall}px;
  background-color: ${theme.light};
  padding-vertical: ${theme.paddingSmall}px;
  padding-horizontal: ${theme.paddingLarge}px;
  border-radius: ${theme.borderRadiusLarge}px;
  border-width: 1px;
  border-color: ${theme.primary};
  elevation: 1;
  box-shadow: ${theme.boxShadow};
  align-items: center;
  align-self: center;
`;

const Title = styled.Text`
  color: ${theme.primary};
`;

export const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Title>{title}</Title>
  </TouchableOpacity>
);

