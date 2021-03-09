import React from "react";
import { useHistory } from "react-router-dom";

import { Input, Buttons, Header } from "../components";
import {
  ButtonDiv,
  Container,
  DivForm,
  Form,
  InputDiv,
  FormContainer,
  ButtonDivBack,
} from "../styles/pages/stylesPages";

export default function ToAdd() {
  let history = useHistory();
  const hadleBackHome = () => {
    history.push("/home");
  };
  return (
    <Container>
      <Header />
      
      <ButtonDivBack>
          <Buttons
            type="button"
            classButton="back"
            name="Editar Naver"
            hadleClick={hadleBackHome}
          />
        </ButtonDivBack>

      <Form>
        <DivForm>
          <FormContainer>
            <InputDiv>
              <Input name="Nome" type="text" />
            </InputDiv>
            <InputDiv>
              <Input name="Idade" type="number" />
            </InputDiv>
            <InputDiv>
              <Input name="Projetos que participou" type="tex" />
            </InputDiv>
          </FormContainer>

          <FormContainer>
            <InputDiv>
              <Input name="Cargo" type="text" />
            </InputDiv>
            <InputDiv>
              <Input name="Tempo de empresa" type="text" />
            </InputDiv>
            <InputDiv>
              <Input name="URL da foto do naver" type="text" />
            </InputDiv>
          </FormContainer>
        </DivForm>
        
        <ButtonDiv>
          <Buttons
            type="submit"
            name="Salvar"
          />
        </ButtonDiv>
      </Form>
    </Container>
  );
}
