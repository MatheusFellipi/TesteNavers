import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DatasContenxt";
import api from "../services/api";

import { Header, Buttons } from "../components";
import {
  Container,
  ContainerNavers,
  HeaderNavers,
  Text,
  ButtonDiv,
} from "../styles/pages/stylesHome";

function Home() {
  const history = useHistory();
  const { AuthStr } = useContext(TokenContext);

  const { handleEditar, handleDelete, dataDelete, seId } = useContext(
    DataContext
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("navers", { headers: { Authorization: AuthStr } })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Unauthorized");
      });
    console.log("oi");
  }, [dataDelete]);

  const hadleToAdd = () => {
    history.push("/toadd");
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
          <div key={data.id}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/47674343?s=400&u=8703692d0c023951227d596c89217f761a7bcc3f&v=4"
                alt={data.name}
              />
              <div>
                <p>{data.name}</p>
                <p>{data.job_role}</p>
              </div>
            </div>
            <button
              className="edit"
              onClick={() => {
                history.push("/toedit");
                handleEditar(data.id);
              }}
            >
              editar
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDelete(data.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </ContainerNavers>
    </Container>
  );
}

export default Home;
