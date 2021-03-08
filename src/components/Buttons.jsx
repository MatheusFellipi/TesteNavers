import React from "react";
import { ArrowBackIosOutlined } from "@material-ui/icons";

import { Button, ButtonBack, Text } from "../styles/components/stylesButtons";

export default function Buttons({ name, type, hadleClick, classButton }) {
  return (
    <>
      {classButton === "back" ? (
        <ButtonBack type={type} onClick={hadleClick}>
          <Text>
          <span><ArrowBackIosOutlined /></span>
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
