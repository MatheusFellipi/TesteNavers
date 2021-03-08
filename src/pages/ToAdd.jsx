import React from "react";
import { useHistory } from "react-router-dom";

import { Input, Buttons } from "../components";
import {
  ButtonDiv,
  Container,
  DivForm,
  Form,
  InputDiv,
  FormContainer
} from "../styles/pages/stylesToAdd";

export default function ToAdd() {
  let history = useHistory();
  const hadleLogin = () => {
    history.push("/home");
  };
  return (
    <Container>
      <Buttons classButton="back" name="Adicionar Naver" />

      <DivForm>

        <Form>
          <FormContainer>
            <InputDiv>
              <Input name="E-mail" type="text" />
            </InputDiv>
            <InputDiv>
              <Input name="Senha" type="password" />
            </InputDiv>
            <InputDiv>
              <Input name="Senha" type="password" />
            </InputDiv>
          </FormContainer>
          
          <FormContainer>
            <InputDiv>
              <Input name="Senha" type="password" />
            </InputDiv>
            <InputDiv>
              <Input name="Senha" type="password" />
            </InputDiv>
            <InputDiv>
              <Input name="Senha" type="password" />
            </InputDiv>
          </FormContainer>

          <ButtonDiv>
            <Buttons type="button" name="Entrar" hadleClick={hadleLogin} />
          </ButtonDiv>
        </Form>
      </DivForm>
    </Container>
  );
}
