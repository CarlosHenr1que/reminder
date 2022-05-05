import React from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container, Title} from './styles';
import {ReminderCard} from '../../components';
import Separator from '../../components/Separator';
import Button from '../../components/Button';

import {Reminder} from '../../models';

const Reminders: React.FC = () => {
  const mock: Reminder[] = [
    {id: '01', title: 'Fazer tarefa de calculo', done: false},
    {id: '02', title: 'Fazer tarefa de database', done: false},
  ];
  return (
    <Container>
      <StatusBar backgroundColor="#2B2B2B" />
      <Title>Lembretes</Title>
      <FlatList
        data={mock}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <ReminderCard
            title={item.title}
            done={item.done}
            onPress={() => {}}
          />
        )}
      />
      <Button title="Novo lembrete" onPress={() => {}} />
    </Container>
  );
};

export default Reminders;
