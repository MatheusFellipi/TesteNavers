import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DatasContenxt";


import api from "../services/api";

import {
  Header,
  Buttons,
  Details,
  ButtonsEditDelete,
  ModalFeedBackDelete,
} from "../components";

import {
  Container,
  ContainerNavers,
  HeaderNavers,
  Text,
  ButtonDiv,
  CardNavers,
  CardNaversSpan,
  CardNaversText,
  ButtonDivCard,
  ImgNavers,
} from "../styles/pages/stylesHome";

function Home() {
  const history = useHistory();
  const { AuthStr } = useContext(TokenContext);

  const { handleDataOnly, dataDelete } = useContext(DataContext);

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  
  useEffect(() => {
    api
      .get("navers", { headers: { Authorization: AuthStr } })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Unauthorized");
      });
  }, [dataDelete]);

  const hadleToAdd = () => {
    history.push("/toadd");
  };

  const handleShow = (id) => {
    console.log(id);
    handleDataOnly(id);
    setShow(true);
  };
  const handleClose = () => {
    setShowDelete(false);
    setShow(false);
  };

  return (
    <Container>
      <Header />

      <HeaderNavers>
        <Text> Navers </Text>

        <ButtonDiv>
          <Buttons
            name="Adicionar naver"
            type="button"
            hadleClick={hadleToAdd}
          />
        </ButtonDiv>
      </HeaderNavers>

      <ContainerNavers>
        {data.map((data) => (
          <CardNavers key={data.id}>
            <div onClick={() => handleShow(data.id)}>
              <ImgNavers src={data.url} alt={data.name} />
              <div>
                <CardNaversText>{data.name}</CardNaversText>
                <CardNaversSpan>{data.job_role}</CardNaversSpan>
              </div>
            </div>
            <ButtonDiv>
              <ButtonDivCard>
                <ButtonsEditDelete
                  classButton="delete"
                  hadleClick={() => {
                    handleDataOnly(data.id);
                    setShowDelete(true);
                  }}
                />
              </ButtonDivCard>

              <ButtonDivCard>
                <ButtonsEditDelete
                  classButton="edit"
                  hadleClick={() => {
                    history.push("/toedit");
                    handleDataOnly(data.id);
                  }}
                />
              </ButtonDivCard>
            </ButtonDiv>
          </CardNavers>
        ))}
      </ContainerNavers>
      <ModalFeedBackDelete show={showDelete} handleClose={handleClose} />
      <Details show={show} handleClose={handleClose} />
    </Container>
  );
}

export default Home;
