import React, {useState} from 'react';
import {Logo, EnterButton, NameInput, Title} from './styles';
import Container from '~/components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '~/store/ducks/auth';

const Register = () => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const uid = useSelector((state) => state.auth.data);

  const createUser = () => {
    dispatch(Actions.createUser({name, uid}));
  };

  return (
      <Container>
        <Logo source={require('~/assets/logo.png')} />
        <Title>Mapa de Frutas</Title>
        <NameInput
          placeholder={'Digite seu nome'}
          onChangeText={(text) => setName(text)}
        />
        <EnterButton onPress={() => createUser()} title="Salvar" />
      </Container>
  );
};

export default Register;
