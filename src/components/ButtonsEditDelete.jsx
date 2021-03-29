import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Button,
  ButtonBack,
  Text,
  Span,
  ButtonEdit,
} from "../styles/components/stylesButtons";

export default function ButtonsEditDelete({
  name,
  type,
  hadleClick,
  classButton,
}) {
  return (
    <>
      {classButton === "delete" ? (
        <ButtonEdit onClick={hadleClick}>
          <Span>
            <DeleteIcon />
          </Span>
        </ButtonEdit>
      ) : (
        <ButtonEdit onClick={hadleClick}>
          <Span>
            <EditIcon />
          </Span>
        </ButtonEdit>
      )}
    </>
  );
}
