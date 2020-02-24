import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Input = props => {
    return <StyledTextInput {...props} style={{ ...props.style }} />;
};

const StyledTextInput = styled.TextInput`
  height: 30px;
  border-bottom-color: grey;
  border-bottom-width: 1px;
  margin: 10px 0;
`

export default Input;