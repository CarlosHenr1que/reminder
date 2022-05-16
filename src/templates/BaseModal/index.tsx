import React from 'react';
import {StatusBar, Modal} from 'react-native';

import {Container, Content} from './styles';

interface BaseModalProps {
  isVisible: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({isVisible, children}) => {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 1)" animated />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Modal>
  );
};

export default BaseModal;
