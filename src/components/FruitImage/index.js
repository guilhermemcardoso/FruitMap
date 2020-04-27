import React, {useEffect, useState} from 'react';
import {Image} from './styles';

const FruitImage = ({category}) => {
  const [icon, setIcon] = useState();

  const getIcon = () => {
    switch (category) {
      case 'apple':
        return require('~/assets/icons/apple.png');
      case 'avocado':
        return require('~/assets/icons/avocado.png');
      case 'banana':
        return require('~/assets/icons/banana.png');
      case 'blueberry':
        return require('~/assets/icons/blueberry.png');
      case 'cherry':
        return require('~/assets/icons/cherry.png');
      case 'coconut':
        return require('~/assets/icons/coconut.png');
      case 'grape':
        return require('~/assets/icons/grape.png');
      case 'greenGrape':
        return require('~/assets/icons/green_grape.png');
      case 'lemon':
        return require('~/assets/icons/lemon.png');
      case 'melon':
        return require('~/assets/icons/melon.png');
      case 'orange':
        return require('~/assets/icons/orange.png');
      case 'peach':
        return require('~/assets/icons/peach.png');
      case 'pineapple':
        return require('~/assets/icons/pineapple.png');
      case 'pomegranate':
        return require('~/assets/icons/pomegranate.png');
      case 'redPear':
        return require('~/assets/icons/red_pear.png');
      case 'strawberry':
        return require('~/assets/icons/strawberry.png');
      case 'watermelon':
        return require('~/assets/icons/watermelon.png');
      default:
        return null;
    }
  };

  useEffect(() => {
    const ref = getIcon();
    setIcon(ref);
  }, []);

  return (
      <Image source={icon} />
  );
};

export default FruitImage;
