import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Title} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <Container testID="button" onPress={onPress}>
      <Icon name="add" size={22} color="#fff" />
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
