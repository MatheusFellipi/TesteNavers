import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { DataContext } from "../context/DatasContenxt";
import { TokenContext } from "../context/TokenContext";

import api from "../services/api"

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

export default function ToEdit() {
  let history = useHistory();

  const { AuthStr } = useContext(TokenContext);
  const { dataDelete, dataOnly } = useContext(DataContext);
  
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [url, setUrl] = useState("");

  const hadleSubmit = (event) => {
    api
      .put(
        "navers",
        {
          job_role: jobRole,
          admission_date: admissionDate,
          birthdate: birthdate,
          project: project,
          name: name,
          url: url,
        },
        { headers: { Authorization: AuthStr } }
      )
      .then(alert("cadastro realizado com sucesso"))
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  const hadleBackHome = () => {
    history.push("/home");
  };
  console.log(dataOnly);
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

      <Form onSubmit={hadleSubmit}>
        <DivForm>
          <FormContainer>
            <InputDiv>
              <Input
                name="Nome"
                type="text"
                value={dataOnly.name}
                handleChange={() => setName}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Idade"
                type="text"
                value={dataOnly.birthdate}
                handleChange={() => setBirthdate}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Projetos que participou"
                type="tex"
                value={dataOnly.project}
                handleChange={() => setProject}
              />
            </InputDiv>
          </FormContainer>

          <FormContainer>
            <InputDiv>
              <Input
                name="Cargo"
                type="text"
                value={dataOnly.job_role}
                handleChange={() => setJobRole}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Tempo de empresa"
                type="text"
                value={dataOnly.admission_date}
                handleChange={() => setAdmissionDate}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="URL da foto do naver"
                type="text"
                value={dataOnly.url}
                handleChange={() => setUrl}
              />
            </InputDiv>
          </FormContainer>
        </DivForm>

        <ButtonDiv>
          <Buttons type="submit" name="Salvar" />
        </ButtonDiv>
      </Form>
    </Container>
  );
}
