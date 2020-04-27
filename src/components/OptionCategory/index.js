import React, {useEffect, useState} from 'react';
import {Container, FruitName} from './styles';
import FruitImage from '~/components/FruitImage';

const OptionCategory = ({category, onPress, selected}) => {

  return (
    <Container selected={selected} onPress={() => onPress(category)}>
      <FruitImage category={category.code} />
      <FruitName>{category.name}</FruitName>
    </Container>
  );
};

export default OptionCategory;
