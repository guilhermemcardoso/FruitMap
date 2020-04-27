import styled from 'styled-components/native';
import * as theme from '~/themes';

export const StyledText = styled.Text`
  font-size: ${({type}) => {
    if(type === 'title') return theme.fontSizes.title;
    if(type === 'subtitle') return theme.fontSizes.subtitle;
    return theme.fontSizes.content;
  }}px;
  line-height: ${({type}) => {
    if(type === 'title') return theme.fontSizes.title + 4;
    if(type === 'subtitle') return theme.fontSizes.subtitle + 4;
    return theme.fontSizes.content + 4;
  }}px;
  color: ${({type}) => {
    if(type === 'title') return theme.fontColors.title;
    if(type === 'subtitle') return theme.fontColors.subtitle;
    return theme.fontColors.content;
  }};
  text-align: ${({center}) => (center ? 'center' : 'left')};
`;
