import React from 'react';
import PropTypes from 'prop-types';
import Icon from '~/components/Icon';
import {Container, TouchableOpacity} from './styles';
import * as theme from '~/themes';

const Fab = ({show, iconName, ...rest}) => {
  
  if(!show) return <></>;
  return (
    <Container>
      <TouchableOpacity {...rest}>
        <Icon name={iconName} size={24} color={theme.light} />
      </TouchableOpacity>
    </Container>
  );
};

Fab.propTypes = {
  iconName: PropTypes.string,
};

Fab.defaultProps = {
  iconName: 'add',
};

export default Fab;
