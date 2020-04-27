import React from 'react';
import PropTypes from 'prop-types';
import {StyledText} from './styles';

const Text = ({children, ...rest}) => (
  <StyledText {...rest}>{children}</StyledText>
);

Text.propTypes = {
  type: PropTypes.oneOf(['title', 'subtitle', 'content'])
};

Text.defaultProps = {
  type: 'content'
};

export default Text;
