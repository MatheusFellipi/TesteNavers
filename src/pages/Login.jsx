import React from "react";
import { Input, Buttons } from "../components";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  DivForm,
  ImgNavers,
  ButtonDiv,
  InputDiv,
} from "../styles/pages/stylesLogin";
import navarsIconBlack from "../assets/img/logo-black.png";

export default function Login() {
  let history = useHistory()
  const hadleLogin = () => { history.push("/home")};
  return (
    <Container>
      <DivForm>
        <ImgNavers src={navarsIconBlack} alt="logo navars" />

        <Form>
          <InputDiv>
            <Input name="E-mail" type="text" />
          </InputDiv>
          <InputDiv>
            <Input name="Senha" type="password" />
          </InputDiv>
          <ButtonDiv>
            <Buttons type="button" name="Entrar" hadleClick={hadleLogin}/>
          </ButtonDiv>
        </Form>
      </DivForm>
    </Container>
  );
}
