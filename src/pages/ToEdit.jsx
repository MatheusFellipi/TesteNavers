import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { DataContext } from "../context/DatasContenxt";
import { TokenContext } from "../context/TokenContext";

import api from "../services/api";

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
  const { dataDelete,handleDelete, dataOnly } = useContext(DataContext);

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setAdmissionDate(dataOnly.admission_date);
    setBirthdate(dataOnly.birthdate);
    setJobRole(dataOnly.job_role);
    setName(dataOnly.name);
    setProject(dataOnly.project);
    setUrl(dataOnly.url);
  },[dataOnly]);

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
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Idade"
                type="text"
                value={birthdate}
                handleChange={(e) => setBirthdate(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Projetos que participou"
                type="tex"
                value={project}
                handleChange={(e) => setProject(e.target.value)}
              />
            </InputDiv>
          </FormContainer>

          <FormContainer>
            <InputDiv>
              <Input
                name="Cargo"
                type="text"
                value={jobRole}
                handleChange={(e) => setJobRole(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Tempo de empresa"
                type="text"
                value={admissionDate}
                handleChange={(e) => setAdmissionDate(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="URL da foto do naver"
                type="text"
                value={url}
                handleChange={(e) => setUrl(e.target.value)}
              />
            </InputDiv>
          </FormContainer>
        </DivForm>

        <ButtonDiv>
          <Buttons type="submit" name="Salvar" />
        </ButtonDiv>
      </Form>
     
            <button
              className="delete"
              onClick={() => {
                history.push("/home");
                handleDelete(dataOnly.id);
              }}
            >
              delete
            </button>
    </Container>
  );
}
