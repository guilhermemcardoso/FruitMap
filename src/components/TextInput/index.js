import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {Input, Container, ShowPassword} from './styles';

const TextInput = ({password, onChangeText, error, forwardRef, ...rest}) => {
  const [visible, setVisible] = useState(false);
  return (
      <Input
        ref={forwardRef}
        secureTextEntry={password && !visible}
        password={password}
        onChangeText={onChangeText}
        error={error}
        {...rest}
      />
  );
};

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
  forwardRef: PropTypes.object,
  editable: PropTypes.bool,
};

TextInput.defaultProps = {
  onChangeText: (text) => text,
  error: false,
  forwardRef: null,
  editable: true,
};

export default TextInput;
