import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Button, Input} from '../../components';
import {Container, Title} from './styles';

const CreateReminder: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const navigation = useNavigation();

  const handleAddReminder = () => {
    navigation.navigate('Reminders');
  };

  return (
    <Container>
      <Title>Novo lembrete</Title>
      <Input
        value={title}
        onChange={setTitle}
        placeholder="Digite o titulo do seu lembrete"
      />
      <Button title="Salvar" onPress={handleAddReminder} />
    </Container>
  );
};

export default CreateReminder;
