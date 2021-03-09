import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 1rem 1rem 1rem 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

export const InputDiv = styled.div`
  width: 260px;
  height: 50px;
  margin: 1rem 0;

  @media (min-width: 800px) {
    width: 360px;
    height: 55px;
    margin: 1rem 0;
  }
`;
export const ButtonDivBack = styled.div`
  width: 266px;
  height: 40px;
  margin: 2rem 0px -1rem 3.5rem;
  z-index: 5;

  @media (min-width: 800px) {
    width: 266px;
    height: 40px;
    margin: 2rem 1rem -2rem 18rem;

  }
`;

export const ButtonDiv = styled.div`
  width: 266px;
  height: 40px;
  margin: 2rem 0 0 2.4rem;

  @media (min-width: 800px) {
    width: 266px;
    height: 40px;
    margin: 2rem 0 0 33rem;
  }
`;
