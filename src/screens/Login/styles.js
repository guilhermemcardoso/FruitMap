import styled from 'styled-components/native';
import Button from '~/components/Button'
import TextInput from '~/components/TextInput';
import * as theme from '~/themes';

export const Logo = styled.Image`
  width: ${({large, small}) => {
    if (large) return theme.logoSizeLarge;
    if (small) return theme.logoSizeSmall;
    return theme.logoSize;
  }}px;
  height: ${({large, small}) => {
    if (large) return theme.logoSizeLarge;
    if (small) return theme.logoSizeSmall;
    return theme.logoSize;
  }}px;
  margin: ${theme.paddingLarge * 2}px;
  align-self: center;
`;

export const PhoneInput = styled(TextInput)`
  margin-horizontal: ${theme.padding}px;
  margin-top: ${theme.paddingLarge * 2}px;
  margin-bottom: ${theme.padding}px;
`;

export const EnterButton = styled(Button)`
  margin: ${theme.padding}px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSizes.title}px;
  color: ${theme.primary};
  align-self: center;
`;
