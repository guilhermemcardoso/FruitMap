import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import * as theme from '~/themes';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'android' ? 'height' : 'padding',
    keyboardVerticalOffset: Platform.OS === 'android' ? 0 : 120,
    enabled: true
  })`
    background-color: ${theme.secondaryLight};
    flex: 1;
  `;