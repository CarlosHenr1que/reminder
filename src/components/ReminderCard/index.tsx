import React, {useState} from 'react';
import {Container, Title, CheckBox} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const ReminderCard: React.FC<Props> = ({title, onPress}) => {
  return (
    <Container onPress={onPress} testID="reminder_card">
      <CheckBox />
      <Title>{title}</Title>
    </Container>
  );
};

export default ReminderCard;
