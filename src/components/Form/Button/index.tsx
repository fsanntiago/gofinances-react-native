import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Content, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <Container onTouchEnd={onPress}>
      <Content {...rest}>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
