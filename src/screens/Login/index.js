import React, {useState} from 'react';
import {Logo, EnterButton, PhoneInput, Title} from './styles';
import Container from '~/components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '~/store/ducks/auth';

const Login = () => {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const login = () => {
    dispatch(Actions.sendCode(phone));
  };

  return (
    <Container>
      <Logo source={require('~/assets/logo.png')} />
      <Title>Mapa de Frutas</Title>
      <PhoneInput
        onSubmitEditing={() => login()}
        returnKeyType={'go'}
        value={phone}
        placeholder={'Digite seu telefone'}
        keyboardType={'phone-pad'}
        onChangeText={(text) => setPhone(text)}
      />
      <EnterButton onPress={() => login()} title="Entrar" />
    </Container>
  );
};

export default Login;
