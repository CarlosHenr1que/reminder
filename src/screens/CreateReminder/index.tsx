import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Button, Input} from '../../components';
import {useReminder} from '../../hooks/contexts/reminder';
import {Reminder} from '../../models';
import {Title} from './styles';
import Box from '../../components/common/Box';

const CreateReminder: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const {addReminders} = useReminder();
  const navigation = useNavigation();

  const handleAddReminder = () => {
    if (!title) {
      return;
    }
    const reminder: Reminder = {
      id: new Date().toString(),
      title,
      done: false,
    };
    addReminders([reminder]);
    navigation.navigate('Reminders');
  };

  return (
    <Box flex={1} background="background" py={10} px={16}>
      <Title>Novo lembrete</Title>
      <Input
        value={title}
        onChange={setTitle}
        placeholder="Digite o titulo do seu lembrete"
      />
      <Box width="100%" align="flex-end" mt={10}>
        <Button
          title="Salvar"
          onPress={handleAddReminder}
          width={140}
          height={40}
        />
      </Box>
    </Box>
  );
};

export default CreateReminder;
