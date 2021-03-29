import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const HeaderNavers = styled.div`
  margin: 4.5rem 1rem 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 160px;
  height: 40px;

  @media (min-width: 800px) {
    width: 170px;
    height: 40px;
  }
`;
export const Text = styled.p`
  font-size: 28px;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 38px;
  }
`;

export const ContainerNavers = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export const CardNavers = styled.div`
  height: 180px;
  margin: 3rem 0 191px 1rem;
`;

export const ImgNavers = styled.img`
  width: 280px;
  height: 280px;
`;

export const CardNaversText = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

export const CardNaversSpan = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

export const ButtonDivCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  height: 40px;

  @media (min-width: 800px) {
    width: 30px;
    height: 40px;
  }
`;
