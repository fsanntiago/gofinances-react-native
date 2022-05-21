import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CenteredContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  padding: 22px;
  border-radius: 10px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px 35px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;
