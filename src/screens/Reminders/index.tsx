import React from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container, Title} from './styles';
import {ReminderCard, Button, Separator} from '../../components';

import {useNavigation} from '@react-navigation/core';
import {useReminder} from '../../hooks/contexts/reminder';

const Reminders: React.FC = () => {
  const {
    data: {reminders},
  } = useReminder();
  const navigation = useNavigation();

  const handleCreateReminderPress = () => {
    navigation.navigate('CreateReminder');
  };

  return (
    <Container>
      <StatusBar backgroundColor="#2B2B2B" />
      <Title>Lembretes</Title>
      <FlatList
        data={reminders}
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
      <Button title="Novo lembrete" onPress={handleCreateReminderPress} />
    </Container>
  );
};

export default Reminders;
