import React from 'react';

import {Container, Title} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <Container testID="button" onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
