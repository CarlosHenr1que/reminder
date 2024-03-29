import React, {useState} from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container, Title} from './styles';
import {ReminderCard, Button, Separator} from '../../components';

import {useNavigation} from '@react-navigation/core';
import {useReminder} from '../../hooks/contexts/reminder';
import Chooser from '../../components/Chooser';
import {getWeekDayFor} from '../../utils/date/format';

const Reminders: React.FC = () => {
  const {data, doneReminder, undoReminder, deleteReminder} = useReminder();
  const {reminders} = data;
  const navigation = useNavigation();

  const [isChooserModalOpen, setIsChooserModalOpen] = useState(false);
  const [selectedReminderId, setSelectedReminderId] = useState<string>();

  const handleCreateReminderPress = () => {
    navigation.navigate('CreateReminder');
  };

  const getTitle = () => {
    const today = new Date();
    return `${getWeekDayFor(today)}, ${today.getDate()}`;
  };

  return (
    <Container>
      <StatusBar backgroundColor="#171717" />
      <Chooser
        isVisible={isChooserModalOpen}
        close={() => {
          setIsChooserModalOpen(false);
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
      <Title>{getTitle()}</Title>
      <FlatList
        data={reminders}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <ReminderCard
            title={item.title}
            done={item.done}
            onPress={() => {
              setIsChooserModalOpen(true);
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
