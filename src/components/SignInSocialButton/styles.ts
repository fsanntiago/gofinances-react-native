import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const Button = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(56)}px;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
