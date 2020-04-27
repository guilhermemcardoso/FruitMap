import React, { useEffect, useState } from 'react';
import { createFruitListener } from '~/services/firebase/fruit';
import {Container} from './styles';

const onFruitUpdateListener = (data) => {
  console.log('Atualizou o listener', data);
}

const onFruitErrorListener = (error) => {
  console.log('Erro no listener', error);
}

const Map = () => {
  useEffect(() => {
    const unsubscribe = createFruitListener(onFruitUpdateListener, onFruitErrorListener);

    return () => {
      unsubscribe();
    };
  }, []);

  return <Container></Container>;
};

export default Map;
