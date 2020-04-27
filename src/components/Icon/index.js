import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import * as theme from '../../themes';
import { Platform } from 'react-native';

const Ionicon = ({name, size, color}) => (
  <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`} size={size} color={color} />
);

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  color: theme.primary
};

export default Ionicon;
