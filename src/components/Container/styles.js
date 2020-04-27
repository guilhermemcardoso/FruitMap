import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import * as theme from '~/themes';

export const StyledView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'android' ? 'height' : 'padding',
  keyboardVerticalOffset: Platform.OS === 'android' ? 0 : 120,
  enabled: true
})`
  background-color: ${theme.secondaryLight};
  padding-bottom: ${theme.padding}px;
  padding-right: ${theme.padding}px;
  padding-left: ${theme.padding}px;
  padding-top: ${theme.padding + getStatusBarHeight()}px;
  flex: 1;
`;
