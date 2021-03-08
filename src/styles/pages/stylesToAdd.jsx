import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100hw;
  height:100vh;
`;
export const DivForm = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:300px;
  height:320px;
  border:solid 0.5px black;
  
  @media(min-width: 800px) {
    width:450px;
    height:425px;
  }
`;
export const FormContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  width: 266px;
  height: 40px;
  margin:1rem 0 0 0.5rem;

  @media(min-width: 800px) {
    width:365px;
    height:55px;
    margin:1rem 0 0 0.5rem;
    
  }
`;

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  height:100%;
  width:100%;
`;

export const InputDiv = styled.div`
  width: 260px;
  height: 50px;
  margin:1rem 0;

  @media(min-width: 800px) {
    width:360px;
    height:55px;
    margin:1rem 0;
  }
`;

export const ButtonDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  width: 266px;
  height: 40px;
  margin:1rem 0 0 0.5rem;

  @media(min-width: 800px) {
    width:365px;
    height:55px;
    margin:1rem 0 0 0.5rem;
    
  }
`;


