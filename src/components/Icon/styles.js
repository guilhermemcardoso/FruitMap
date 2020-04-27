import styled from 'styled-components/native';
import Text from '~/components/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import * as theme from '~/themes';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({type, disabled}) => {
    if(type === 'link') return 'transparent';
    if(type === 'primary') return theme.tertiary;
    if(type === 'accent') return theme.secondary;
    if(type === 'secondary') return theme.dark6;
    return theme.tertiary;
  }};
  padding-vertical: ${({type}) => type === 'link' ? 0 : theme.padding}px;
  padding-horizontal: ${({type}) => type === 'link' ? 0 : theme.padding + 10}px;
  border-radius: ${theme.borderRadius}px;
  border-bottom-width: ${({type}) => (type === 'link' ? 0 : 2)}px;
  border-bottom-color: ${({type, disabled}) => {
    if(type === 'link') return 'transparent';
    if(type === 'primary') return theme.primary;
    if(type === 'accent') return theme.secondaryLight;
    if(type === 'secondary') return theme.dark7;
    return theme.tertiary;
  }};
  align-items: center;
  align-self: center;
`;

export const Text = styled(Text)`
  color: ${({type, disabled}) => {
    if (type === 'secondary') return theme.dark5;
    if (type === 'accent') return theme.light1;
    if (type === 'link') return theme.tertiary;
    return theme.light1;
  }};
`;
