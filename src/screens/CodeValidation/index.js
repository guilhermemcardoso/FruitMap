import React, {useState} from 'react';
import {Logo, EnterButton, CodeInput, Title} from './styles';
import Container from '~/components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '~/store/ducks/auth';

const CodeValidation = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const validation = useSelector((state) => state.auth.data);
  const validate = () => {
    dispatch(Actions.validateCode({code, validation}));
  };

  return (
    <Container>
      <Logo source={require('~/assets/logo.png')} />
      <Title>Mapa de Frutas</Title>
      <CodeInput
      onSubmitEditing={() => validate()}
      returnKeyType={'go'}
        value={code}
        keyboardType={'numeric'}
        placeholder={'Digite o código de validação'}
        onChangeText={(text) => setCode(text)}
      />
      <EnterButton onPress={() => validate()} title="Validar" />
    </Container>
  );
};

export default CodeValidation;
