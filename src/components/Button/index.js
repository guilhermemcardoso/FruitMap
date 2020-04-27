import React from 'react';
import PropTypes from 'prop-types';
import {Title, Container, TouchableOpacity} from './styles';

const Button = ({title, type, disabled, ...rest}) => (
  <Container>
    <TouchableOpacity type={type} disabled={disabled} {...rest}>
      <Title type={type} disabled={disabled}>
        {title.toUpperCase()}
      </Title>
    </TouchableOpacity>
  </Container>
);

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'link', 'accent']),
  title: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  text: '',
};

export default Button;
