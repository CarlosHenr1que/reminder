import React from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container, Title} from './styles';
import {ReminderCard} from '../../components';
import Separator from '../../components/Separator';

const Reminders: React.FC = () => {
  const mock = [
    {title: 'Fazer tarefa de calculo', done: false},
    {title: 'Fazer tarefa de database', done: false},
  ];
  return (
    <Container>
      <StatusBar backgroundColor="#2B2B2B" />
      <Title>Lembretes</Title>
      <FlatList
        data={mock}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => (
          <ReminderCard
            title={item.title}
            done={item.done}
            onPress={() => {}}
          />
        )}
      />
    </Container>
  );
};

export default Reminders;
