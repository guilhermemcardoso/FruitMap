import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Container from '~/components/Container';
import {OptionContainer, OptionTitle, OptionText} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import NotificationSwitch from '~/components/NotificationSwitch';
import Message from '~/components/Message';
import {Actions} from '~/store/ducks/auth';

const Settings = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(Actions.logout());
    setShowMessage(false);
  };

  const menu = [
    {
      label: 'Background fetch',
      onPress: () => {},
      right: <NotificationSwitch />,
    },
    {
      label: 'Logout',
      onPress: () => {
        setShowMessage(true);
      },
    },
  ];

  return (
    <Container>
      <FlatList
        style={{paddingHorizontal: 15}}
        ListHeaderComponent={() => (
          <OptionTitle weight={'medium'}>Configurações</OptionTitle>
        )}
        data={menu}
        keyExtractor={(item) => item.label}
        renderItem={({item}) => (
          <OptionContainer onPress={item.onPress}>
            <OptionText>{item.label}</OptionText>
            {item.right}
          </OptionContainer>
        )}
      />
      <Message
        show={showMessage}
        message={'Deseja realmente sair da aplicação?'}
        onCancelPress={() => setShowMessage(false)}
        cancelTitle={'Cancelar'}
        onConfirmPress={onLogout}
        confirmTitle={'Confirmar'}
      />
    </Container>
  );
};

export default Settings;
