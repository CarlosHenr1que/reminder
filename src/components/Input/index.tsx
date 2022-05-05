import React from 'react';

import {Container} from './styles';

interface Props {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({value, onChange, placeholder}) => {
  return (
    <Container
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor="#bcbcbc"
    />
  );
};

export default Input;
