import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  height: 60px;
  border: 1px;
  border-color: #575757;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  padding: 10px;
  color: #fff;
`;
