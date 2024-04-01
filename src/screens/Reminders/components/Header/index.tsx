import React from 'react';
import Box from '../../../../components/common/Box';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  icon: string;
  onPressIcon: () => void;
}

export const Header: React.FC<HeaderProps> = ({icon, onPressIcon}) => {
  return (
    <Box height={55} align="flex-end">
      <TouchableOpacity onPress={onPressIcon} testID="header-icon-button">
        <Icon name={icon} size={22} color="#727272" />
      </TouchableOpacity>
    </Box>
  );
};
