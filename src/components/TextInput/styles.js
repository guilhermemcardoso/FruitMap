import styled from 'styled-components/native';

import * as theme from '~/themes';

export const Input = styled.TextInput`
  background: white;
  align-self: stretch;
  padding: ${theme.paddingLarge}px;
  border-radius: ${theme.borderRadiusLarge}px;
  font-size: 16px;
  text-align: center;
  box-shadow: ${theme.boxShadow};
  elevation: 1;
  color: ${theme.fontColors.content};
  border: ${({ error }) => error ? 'solid 1px red' : `solid 1px ${theme.boxShadowColor}`}
`;

export const ShowPassword = styled.TouchableOpacity`
  position: absolute;
  right: ${theme.padding}px;
  z-index: 1;
  elevation: 2;
`;
