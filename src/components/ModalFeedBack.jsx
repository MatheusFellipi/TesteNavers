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
  ContainerFeed,
  Title,
  Span,
  MainFeed,
  ButtonCloseFeed,
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

export default function ModalFeedBack({ handleClose, show, text, textSub }) {
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
            <ContainerFeed>
              <ButtonCloseFeed>
                <ButtonClose onClick={handleClose}><CloseIcon/></ButtonClose>
              </ButtonCloseFeed>
              <MainFeed>
                <Title>{text}</Title>
                <Span>{textSub}</Span>
              </MainFeed>
            </ContainerFeed>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
