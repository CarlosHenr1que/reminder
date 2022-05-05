import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border: 1px;
  border-color: #575757;
  border-radius: 5px;
  align-items: center;
  padding: 10px;
`;

export const CheckBox = styled.View`
  width: 30px;
  height: 30px;
  border: 1px;
  border-color: #575757;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
`;
