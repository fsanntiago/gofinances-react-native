import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled(RectButton)`
  width: 100%;
  padding: 18px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
