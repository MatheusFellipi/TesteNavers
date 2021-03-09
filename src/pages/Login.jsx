import React, { useState } from "react";
import { Input, Buttons } from "../components";
import { useHistory } from "react-router-dom";

import api from "../services/api";
import navarsIconBlack from "../assets/img/logo-black.png";
import {
  Container,
  Form,
  DivForm,
  ImgNavers,
  ButtonDiv,
  InputDiv,
} from "../styles/pages/stylesLogin";

export default function Login() {
  let history = useHistory();

  const [data, setData] = useState("");
  const [form, setForm] = useState({
    email:"",
    password:"",
  });

  // api
  //   .post("https://navedex-api.herokuapp.com/v1/users/login", {
  //     email: "matheus-user@nave.rs",
  //     password: "nave1234",
  //   })
  //   .then(({ data }) => {
  //     setData(data);
  //   });

  const hadleLogin = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name ==="E-mail") {
      setForm(prevState => {
        return { ...prevState, email: value }
      })
    }

    if (name ==="Senha") {
      setForm(prevState => {
        return { ...prevState, password: value }
      })
    }
    
  };
  console.log(form);

  return (
    <Container>
      <DivForm>
        <ImgNavers src={navarsIconBlack} alt="logo navars" />

        <Form onSubmit={handleSubmit}>

          <InputDiv>
            <Input name="E-mail" type="text" handleChange={handleChange} />
          </InputDiv>
          <InputDiv>
            <Input name="Senha" type="password" handleChange={handleChange} />
          </InputDiv>

          <ButtonDiv>
            <Buttons type="button" name="Entrar" hadleClick={hadleLogin} />
          </ButtonDiv>

        </Form>
      </DivForm>
    </Container>
  );
}
