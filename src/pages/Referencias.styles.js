import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.header};
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 120px;
    height: auto;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 50px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: ${props => props.theme.textColorLaranja};
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
    margin: 0;
  }

  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MainContainer = styled.main`
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TituloContainer = styled.h1`
  text-align: center;
  margin: 4rem;
  color: #5D3FD3;

  @media (max-width: 768px) {
    margin: 2rem;
    font-size: 1.5rem;
  }
`;

export const ImporContainer = styled.h2`
  color: #F08080;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export const Text1Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 20rem;
  line-height: 1.2;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

export const UsoContainer = styled.h2`
  color: #F08080;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export const Text2Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

export const FreqContainer = styled.h2`
  color: #F08080;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export const Text3Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 20rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    max-width: 100%;
  }
`;
