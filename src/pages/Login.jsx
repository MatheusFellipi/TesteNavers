import React, { useState, useContext } from "react";

import { TokenContext } from "../context/TokenContext";
import api from "../services/api";

import { Input, Buttons } from "../components";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const { setToken } = useContext(TokenContext);


  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const hadleLogin = async () => {
    if (formData.email && formData.password) {
     await api
        .post("users/login", {
          email: formData.email,
          password: formData.password,
        })
        .then(({ data }) => {
          setData(data);
          setToken(data.token);
          history.push("/home")
        })
        .catch((error) => {
          console.log("Usuario nao existe ou dado Incorreto");
        });
    } else if (formData.email === "" || formData.password === "") {
      alert("entre com os dados");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "E-mail") {
      setFormData((prevState) => {
        return { ...prevState, email: value };
      });
    }

    if (name === "Senha") {
      setFormData((prevState) => {
        return { ...prevState, password: value };
      });
    }
  };
  return (
    <Container>
      <DivForm>
        <ImgNavers src={navarsIconBlack} alt="logo navars" />

        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <Input name="E-mail" type="text" handleChange={handleChange}/>
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
