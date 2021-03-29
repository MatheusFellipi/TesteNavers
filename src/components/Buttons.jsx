import React from "react";
import { ArrowBackIosOutlined, EditIcon } from "@material-ui/icons";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import {
  Button,
  ButtonBack,
  Text,
  Span,
  ButtonEdit,
} from "../styles/components/stylesButtons";

export default function Buttons({ name, type, hadleClick, classButton }) {
  return (
    <>
      {classButton === "back" ? (
        <ButtonBack type={type} onClick={hadleClick}>
          <Text>
            <Span>
              <ArrowBackIosOutlined />
            </Span>
            {name}
          </Text>
        </ButtonBack>
      ) : (
        <Button type={type} onClick={hadleClick}>
          {name}
        </Button>
      )}
    </>
  );
}
