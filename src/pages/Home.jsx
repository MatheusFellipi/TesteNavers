import React from 'react';
import {Header,Buttons} from '../components'
import { Container,ContainerNavers,
  HeaderNavers,Text,ButtonDiv } from '../styles/pages/stylesHome';

function Home() {
  return (
    <Container>
      <Header />
        
      <HeaderNavers>
        <Text> Navers </Text>

        <ButtonDiv>
        <Buttons name="Adicionar naver" type="button" />
        </ButtonDiv>
        
      </HeaderNavers>

      <ContainerNavers>

      </ContainerNavers>
    </Container>

  );
}

export default Home;