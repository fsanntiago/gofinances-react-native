import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type PropsTabNavigation = {
  Listagem: undefined;
  Cadastrar: undefined;
  Resumo: undefined;
};

export type PropsTab = BottomTabNavigationProp<PropsTabNavigation>;
