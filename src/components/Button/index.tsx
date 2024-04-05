import React from 'react';

import {Container, Title} from './styles';

interface Props {
  title: string;
  width?: number;
  height?: number;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, width, height, onPress}) => {
  return (
    <Container testID="button" onPress={onPress} width={width} height={height}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
