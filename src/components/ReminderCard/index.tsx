import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, CheckBox} from './styles';

interface Props {
  title: string;
  onPress: () => void;
  done: boolean;
}

const ReminderCard: React.FC<Props> = ({title, onPress, done}) => {
  return (
    <Container onPress={onPress} testID="reminder_card">
      <CheckBox>
        {done && (
          <Icon testID="done_icon" name="close" size={22} color="#fff" />
        )}
      </CheckBox>

      <Title>{title}</Title>
    </Container>
  );
};

export default ReminderCard;
