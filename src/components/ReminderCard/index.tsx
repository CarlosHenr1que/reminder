import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, CheckBox} from './styles';

interface Props {
  title: string;
  done: boolean;
  onCheckPress: () => void;
  onLongPress: () => void;
}

const ReminderCard: React.FC<Props> = ({
  title,
  done,
  onCheckPress,
  onLongPress,
}) => {
  return (
    <Container testID="reminder_card" onLongPress={onLongPress}>
      <Title>{title}</Title>
      <CheckBox onPress={onCheckPress} testID="reminder_check_button">
        {done && (
          <Icon testID="done_icon" name="close" size={22} color="#fff" />
        )}
      </CheckBox>
    </Container>
  );
};

export default ReminderCard;
