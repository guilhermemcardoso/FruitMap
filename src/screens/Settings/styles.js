import styled from 'styled-components/native';
import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import * as theme from '~/themes';

export const OptionContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding-vertical: ${theme.paddingLarge}px;
  border-bottom-width: 1px;
  border-bottom-color: 'rgba(0, 0, 0, 0.0649626)';
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: ${theme.fontSizes.content}px;
  color: ${theme.fontColors.content};
`;

export const OptionTitle = styled.Text`
  font-size: ${theme.fontSizes.screenTitle}px;
  color: ${theme.fontColors.content};
`;

export const NameInput = styled(TextInput)`
  margin-horizontal: ${theme.padding}px;
  margin-top: ${theme.paddingLarge * 2}px;
  margin-bottom: ${theme.padding}px;
`;

export const LogoutButton = styled(Button)`
  margin: ${theme.padding}px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSizes.title}px;
  color: ${theme.primary};
  align-self: center;
`;
