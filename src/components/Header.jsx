import React from "react";
import { useHistory } from "react-router-dom";
import logoBlack from "../assets/img/logo-black.png";

import { Heading, Img, Buttons } from "../styles/components/stylesHeader";

function Header() {
  let history = useHistory();
  const hadleLogin = () => {
    history.push("/");
  };
  
  return (
    <>
      <Heading>
        <Img src={logoBlack} alt="navers" />

        <Buttons onClick={hadleLogin}>Sair</Buttons>
      </Heading>
    </>
  );
}

export default Header;
