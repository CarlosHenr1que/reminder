import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Option} from '../../models/Options';
import BaseModal from '../../templates/BaseModal';

import {OptionButton, Title} from './styles';

interface Props {
  isVisible: boolean;
  options: Option[];
  close: () => void;
}

const Chooser: React.FC<Props> = ({isVisible, options, close}) => {
  const handlePress = (action: () => void) => {
    action();
    close();
  };

  return (
    <BaseModal isVisible={isVisible}>
      {options.map(({title, icon, action}) => (
        <OptionButton key={title} onPress={() => handlePress(action)}>
          <Title>{title}</Title>
          <Icon name={icon} size={22} color="#fff" />
        </OptionButton>
      ))}
    </BaseModal>
  );
};

export default Chooser;
