import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { DataContext } from "../context/DatasContenxt";
import { TokenContext } from "../context/TokenContext";

import api from "../services/api";

import {
  Input,
  Buttons,
  Header,
  ButtonsEditDelete,
  ModalFeedBack,
  ModalFeedBackDelete,
} from "../components";
import {
  ButtonDiv,
  Container,
  DivForm,
  Form,
  InputDiv,
  FormContainer,
  ButtonDivBack,
  ButtonDivDelete,
} from "../styles/pages/stylesPages";

export default function ToEdit() {
  let history = useHistory();

  const { AuthStr } = useContext(TokenContext);
  const { dataOnly } = useContext(
    DataContext
  );

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [url, setUrl] = useState("");

  const [showFeedBack, setShowFeedBack] = useState(false);
  const [IsError, setIsError] = useState();
  const [showDelete, setShowDelete] = useState(false);

  
  const handleClose = () => {
    setShowDelete(false);
    setShowFeedBack(false);
  };

  useEffect(() => {
    setAdmissionDate(dataOnly.admission_date);
    setBirthdate(dataOnly.birthdate);
    setJobRole(dataOnly.job_role);
    setName(dataOnly.name);
    setProject(dataOnly.project);
    setUrl(dataOnly.url);
  }, [dataOnly]);

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
      .then(() => {
        setShowFeedBack(true);
        setIsError(false);
      })
      .catch((error) => {
        setShowFeedBack(true);
        setIsError(true);
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
          <Buttons type="submit" name="Salvar" hadleClick={hadleSubmit} />
        </ButtonDiv>
      </Form>
      <ButtonDivDelete>
        <ButtonsEditDelete
          type="button"
          classButton="delete"
          hadleClick={() => {
            setShowDelete(true);
          }}
        />
      </ButtonDivDelete>

      {IsError ? (
        <ModalFeedBack
          show={showFeedBack}
          handleClose={handleClose}
          textSub="Nao e possivel criar um naver"
        />
      ) : (
        <ModalFeedBack
          show={showFeedBack}
          handleClose={handleClose}
          text="Naver atualizado"
          textSub="Naver atualizado com sucesso!"
        />
      )}
      <ModalFeedBackDelete show={showDelete} handleClose={handleClose} />
    </Container>
  );
}
