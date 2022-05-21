import React from "react";
import { TextInputProps } from "react-native";
import { Conteiner } from "./style";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <Conteiner {...rest} />;
}
