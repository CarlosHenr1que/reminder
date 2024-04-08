import React, {useState} from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Title} from './styles';
import {ReminderCard, Separator} from '../../components';

import {useNavigation} from '@react-navigation/core';
import {useReminder} from '../../hooks/contexts/reminder';
import Chooser from '../../components/Chooser';
import {getWeekDayFor} from '../../utils/date/format';
import Box from '../../components/common/Box';
import {Header} from './components/Header';
import {Reminder} from '../../models';

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

  const onHeaderIconPress = () => {
    handleCreateReminderPress();
  };

  const onCheckReminderPress = (reminder: Reminder) => {
    setSelectedReminderId(reminder.id);
    if (reminder.done) {
      undoReminder(reminder.id);
    } else {
      doneReminder(reminder.id);
    }
  };

  const onReminderCardLongPress = (reminder: Reminder) => {
    setSelectedReminderId(reminder.id);
    setIsChooserModalOpen(true);
  };

  return (
    <Box flex={1} px={16} py={60} background="background">
      <StatusBar backgroundColor="#171717" />
      <Header icon="add" onPressIcon={onHeaderIconPress} />
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
            onCheckPress={() => onCheckReminderPress(item)}
            onLongPress={() => onReminderCardLongPress(item)}
          />
        )}
      />
    </Box>
  );
};

export default Reminders;
