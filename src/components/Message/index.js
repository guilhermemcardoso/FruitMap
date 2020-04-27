import React from 'react';
import {Container, Content, ButtonContainer, Button, StyledText} from './styles';

const Message = ({show, message, onConfirmPress, confirmTitle, onCancelPress, cancelTitle}) => {
  
  if(!show) return <></>;
  return (
    <Container>
      <Content>
        <StyledText>{message}</StyledText>
      </Content>
      <ButtonContainer>
        <Button onPress={onCancelPress} title={cancelTitle} />
        <Button onPress={onConfirmPress} title={confirmTitle} />
      </ButtonContainer>
    </Container>
  );
};

export default Message;
