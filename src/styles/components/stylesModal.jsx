import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 503px;

  background-color: #fff;

  @media (max-width: 965px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 800px;
  }
  @media (max-width: 500px) {
    width: 350px;
    height: 800px;
  }
`;
export const Img = styled.img`
  width: 503px;
  height: 503px;

  @media (max-width: 965px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Main = styled.div`
  margin-left: 2rem;
  @media (max-width: 965px) {
    margin-left: -5rem;
  }
  @media (max-width: 500px) {
    margin-left: -5rem;
  }
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const TitleSub = styled.h5`
  font-size: 16px;
  font-weight: 600;
`;
export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const ButtonDivCard = styled.div`
  display: flex;
  width: 30px;
  height: 40px;

  @media (min-width: 800px) {
    width: 30px;
    height: 40px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 160px;
  height: 40px;
  margin-top: 5rem;

  @media (min-width: 800px) {
    width: 170px;
    height: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
  @media (max-width: 965px) {
    margin-top: 0;
  }
`;
export const ButtonCloseDiv = styled.div`
  position: absolute;
  margin: 1.5rem 0 0 25rem;
  @media (max-width: 500px) {
    margin: 1.5rem 0 0 15rem;
  }
  @media (max-width: 965px) {
    margin: 1.5rem 0 0 15rem;
  }
`;
export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
`;

export const ContainerFeed = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 250px;
  width: 503px;

  background-color: #fff;

  @media (max-width: 965px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 400px;
  }
  @media (max-width: 500px) {
    height: 200px;
    width: 400px;
  }
`;
export const ButtonCloseFeed = styled.div`
  position: absolute;
  margin: 0rem 1rem 5rem 28rem;

  @media (max-width: 500px) {
    margin: 1.5rem 0 0 15rem;
  }
  @media (max-width: 965px) {
    margin: 1.5rem 0 0 15rem;
  }
`;
export const MainFeed = styled.div`
  margin-left: 2rem;
  @media (max-width: 965px) {
    margin-left: -5rem;
  }
  @media (max-width: 500px) {
    margin-left: -2rem;
  }
`;

export const ButtonDeleteDiv = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 3rem;
  margin-left: 13rem;

  background-color: #fff;
`;
export const ButtonDelete = styled.button`
  background-color: transparent;

  width:5rem;
  height:3rem;
  margin-right:2rem;
`;
