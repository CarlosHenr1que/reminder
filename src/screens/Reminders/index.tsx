import React, {useState} from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container, Title} from './styles';
import {ReminderCard, Button, Separator} from '../../components';

import {useNavigation} from '@react-navigation/core';
import {useReminder} from '../../hooks/contexts/reminder';
import Choser from '../../components/Chooser';

const Reminders: React.FC = () => {
  const {data, doneReminder, undoReminder, deleteReminder} = useReminder();
  const {reminders} = data;
  const navigation = useNavigation();

  const [isChoserModalOpen, setIsChoserModalOpen] = useState(false);
  const [selectedReminderId, setSelectedReminderId] = useState<string>();

  const handleCreateReminderPress = () => {
    navigation.navigate('CreateReminder');
  };

  return (
    <Container>
      <StatusBar backgroundColor="#2B2B2B" />
      <Choser
        isVisible={isChoserModalOpen}
        close={() => {
          setIsChoserModalOpen(false);
          setSelectedReminderId(undefined);
        }}
        options={[
          {
            title: 'Finalizar lembrete',
            icon: 'done',
            action: () => {
              if (selectedReminderId) {
                doneReminder(selectedReminderId);
              }
            },
          },
          {
            title: 'Deletar',
            icon: 'delete',
            action: () => {
              if (selectedReminderId) {
                deleteReminder(selectedReminderId);
              }
            },
          },
          {
            title: 'Cancelar',
            icon: 'close',
            action: () => {
              if (selectedReminderId) {
                undoReminder(selectedReminderId);
              }
            },
          },
        ]}
      />
      <Title>Lembretes</Title>
      <FlatList
        data={reminders}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <ReminderCard
            title={item.title}
            done={item.done}
            onPress={() => {
              setIsChoserModalOpen(true);
              setSelectedReminderId(item.id);
            }}
          />
        )}
      />
      <Button title="Novo lembrete" onPress={handleCreateReminderPress} />
    </Container>
  );
};

export default Reminders;
