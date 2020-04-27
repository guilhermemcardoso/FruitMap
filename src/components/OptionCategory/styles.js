import styled from 'styled-components/native';

import * as theme from '~/themes';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({selected}) => selected ? theme.primaryLight : theme.light};
  align-items: center;
  flex-direction: row;
  padding-vertical: ${theme.padding}px;
  padding-horizontal: ${theme.paddingLarge}px;
`;

export const FruitImage = styled.Image`
    width: ${theme.fruitIconSize}px;
    height: ${theme.fruitIconSize}px;
    margin-right: ${theme.padding}px;
`;

export const FruitName = styled.Text`
    
`;