import React from 'react';
import {StyledView} from './styles';

const Container = ({children, ...rest}) => (
    <StyledView {...rest}>{children}</StyledView>
);

export default Container;
