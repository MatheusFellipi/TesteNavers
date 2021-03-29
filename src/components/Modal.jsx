import React, { useContext, useState } from "react";
import { DataContext } from "../context/DatasContenxt";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { Modal } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";

import ButtonsEditDelete from "./ButtonsEditDelete";
import {
  Container,
  Img,
  ImgDiv,
  Main,
  Title,
  TitleSub,
  ButtonDivCard,
  ButtonDiv,
  Span,
  ButtonCloseDiv,
  ButtonClose,
} from "../styles/components/stylesModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "transparent",
  },
}));

export default function Details({ handleClose, show }) {
  const history = useHistory();
  const { dataOnly, handleDataOnly, handleDelete } = useContext(DataContext);

  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.paper}>
            <Container>
              <ImgDiv>
                <Img src={dataOnly.url} alt={dataOnly.name} />
              </ImgDiv>
              <Main>
                <ButtonCloseDiv>
                  <ButtonClose onClick={handleClose}>
                    <CloseIcon />
                  </ButtonClose>
                </ButtonCloseDiv>
                <Title>{dataOnly.name}</Title>
                <Span>{dataOnly.job_role}</Span>
                <TitleSub>Idade</TitleSub>
                <Span>{dataOnly.birthdate}</Span>
                <TitleSub>Tempo de empresa</TitleSub>
                <Span>{dataOnly.admission_date}</Span>

                <TitleSub>Projetos que participou</TitleSub>
                <Span>{dataOnly.project}</Span>
                <ButtonDiv>
                  <ButtonDivCard>
                    <ButtonsEditDelete
                      classButton="delete"
                      hadleClick={() => {
                        handleClose();
                        handleDelete(dataOnly.id);
                      }}
                    />
                  </ButtonDivCard>
                  <ButtonDivCard>
                    <ButtonsEditDelete
                      classButton="edit"
                      hadleClick={() => {
                        history.push("/toedit");
                        handleDataOnly(dataOnly.id);
                      }}
                    />
                  </ButtonDivCard>
                </ButtonDiv>
              </Main>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
