import React, { useContext, useState } from "react";
import { TokenContext } from "../context/TokenContext";
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
import api from "../services/api";

export default function ToAdd() {
  let history = useHistory();
  const { AuthStr } = useContext(TokenContext);

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [url, setUrl] = useState("");

  const hadleSubmit = (event) => {
    
    api
      .post(
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
  console.log(admissionDate);
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
          name="Adicionar Naver"
          hadleClick={hadleBackHome}
        />
      </ButtonDivBack>

      <Form>
        <DivForm>
          <FormContainer>
            <InputDiv>
              <Input
                name="Nome"
                type="text"
                placeholder="Nome"
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Idade"
                type="text"
                placeholder="Idade 12/03/1998"
                handleChange={(e) => setBirthdate(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Projetos que participou"
                type="text"
                placeholder="Projetos que participou"

                handleChange={(e) => setProject(e.target.value)}
              />
            </InputDiv>
          </FormContainer>

          <FormContainer>
            <InputDiv>
              <Input
                name="Cargo"
                type="text"
                placeholder="Cargo"
                handleChange={(e) => setJobRole(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="Tempo de empresa"
                type="text"
                placeholder="Tempo de empresa 12/03/1998"
                handleChange={(e) => setAdmissionDate(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Input
                name="URL da foto do naver"
                type="text"
                handleChange={(e) => setUrl(e.target.value)}
                placeholder="URL da foto do naver"
              />
            </InputDiv>
          </FormContainer>
        </DivForm>

        <ButtonDiv>
          <Buttons type="submit" name="Salvar" hadleClick={hadleSubmit} />
        </ButtonDiv>
      </Form>
    </Container>
  );
}
