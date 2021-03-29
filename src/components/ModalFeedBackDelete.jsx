import React, { useContext, useState } from "react";
import { DataContext } from "../context/DatasContenxt";

import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { Modal } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import Buttons from "./Buttons";

import {
  ContainerFeed,
  Title,
  Span,
  MainFeed,
  ButtonCloseFeed,
  ButtonClose,
  ButtonDelete,
  ButtonDeleteDiv,
} from "../styles/components/stylesModal";
import ModalFeedBack from "./ModalFeedBack";

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

export default function ModalFeedBackDelete({ handleClose, show }) {
  const { handleDelete, dataOnly } = useContext(DataContext);
  const [showFeedBack, setShowFeedBack] = useState(false);

  const close = () => setShowFeedBack(false);

  const classes = useStyles();

  return (
    <>
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
              <ContainerFeed>
                <ButtonCloseFeed>
                  <ButtonClose onClick={handleClose}>
                    <CloseIcon />
                  </ButtonClose>
                </ButtonCloseFeed>
                <MainFeed>
                  <Title>Excluir Naver</Title>
                  <Span>Tem certeza que deseja excluir este Naver?</Span>

                  <ButtonDeleteDiv>
                    <ButtonDelete onClick={handleClose}>Cancelar</ButtonDelete>
                    <Buttons
                      name="Excluir"
                      hadleClick={() => {
                        handleDelete(dataOnly.id);
                        handleClose();
                        setShowFeedBack(true);
                      }}
                    />
                  </ButtonDeleteDiv>
                </MainFeed>
              </ContainerFeed>
            </div>
          </Fade>
        </Modal>
      </div>
      <ModalFeedBack
        show={showFeedBack}
        handleClose={close}
        text="Naver excluído"
        textSub="Naver excluído com sucesso!"
      />
    </>
  );
}
