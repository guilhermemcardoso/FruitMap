import styled from 'styled-components/native';

import * as theme from '~/themes';

export const Container = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: ${theme.paddingLarge}px;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${theme.primary};
  width: ${theme.fabSize}px;
height: ${theme.fabSize}px;
  elevation: 1;
  box-shadow: ${theme.boxShadow};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: ${theme.fabRadius}px;
`;
