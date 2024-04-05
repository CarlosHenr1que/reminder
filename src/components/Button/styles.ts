import styled from 'styled-components/native';

interface ContainerProps {
  width?: number;
  height?: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => (props.height ? `${props.height}px` : '40px;')};
  background: ${({theme}) => theme.colors.secondary};
  border-radius: ${({theme}) => theme.metrics.baseRadius}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-left: 10px;
`;
