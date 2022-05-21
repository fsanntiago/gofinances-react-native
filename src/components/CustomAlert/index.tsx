import React from "react";

import {
  CenteredContainer,
  Container,
  Header,
  Message,
  Button,
  ButtonTitle
} from "./styles";

interface Props {
  message: string;
  buttonTitle: string;
  onPress: () => void;
}

export function CustomAlert({ message, buttonTitle, onPress }: Props) {
  return (
    <CenteredContainer>
      <Container>
        <Header>
          <Message>{message}</Message>
        </Header>

        <Button onPress={onPress}>
          <ButtonTitle>{buttonTitle}</ButtonTitle>
        </Button>
      </Container>
    </CenteredContainer>
  );
}
