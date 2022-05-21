import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 18px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
