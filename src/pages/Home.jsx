import React from 'react';
import { useHistory } from 'react-router';
import {Header,Buttons} from '../components'
import { Container,ContainerNavers,
  HeaderNavers,Text,ButtonDiv } from '../styles/pages/stylesHome';

function Home() {
  let history = useHistory();
  

  const hadleToAdd = () =>{
    history.push("/toadd")
  }
  
  return (
    <Container>
      <Header />
        
      <HeaderNavers>
        <Text> Navers </Text>

        <ButtonDiv>
        <Buttons name="Adicionar naver" type="button" hadleClick={hadleToAdd}/>
        </ButtonDiv>
        
      </HeaderNavers>

      <ContainerNavers>

      </ContainerNavers>
    </Container>

  );
}

export default Home;