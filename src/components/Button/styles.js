import styled from 'styled-components/native';

import * as theme from '~/themes';

export const Container = styled.View`
  flex-direction: row;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({type, disabled}) => {
    if(type === 'link') return 'transparent';
    if(type === 'accent') return theme.secondary;
    if(type === 'secondary') return theme.dark6;
    return theme.primary;
  }};
  padding-vertical: ${({type}) => type === 'link' ? 0 : theme.paddingLarge}px;
  padding-horizontal: ${({type}) => type === 'link' ? 0 : theme.paddingLarge + 10}px;
  border-radius: ${theme.borderRadiusLarge}px;
  border-bottom-width: ${({type}) => (type === 'link' ? 0 : 2)}px;
  border-bottom-color: ${({type, disabled}) => {
    if(type === 'link') return 'transparent';
    if(type === 'accent') return theme.secondaryLight;
    if(type === 'secondary') return theme.dark7;
    return theme.primary;
  }};
  elevation: 1;
  box-shadow: ${theme.boxShadow};
  align-items: center;
  align-self: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({type, disabled}) => {
    if (type === 'secondary') return theme.dark5;
    if (type === 'accent') return theme.light1;
    if (type === 'link') return theme.tertiary;
    return theme.light;
  }};
`;
