import React from 'react';

import {Container} from './styles';
import {ReminderCard} from '../../components';

const Reminders: React.FC = () => {
  return (
    <Container>
      <ReminderCard title="Fazer tarefa de calculo" onPress={() => {}} />
    </Container>
  );
};

export default Reminders;
