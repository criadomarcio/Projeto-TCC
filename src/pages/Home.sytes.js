
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.header};
  padding: 10px 20px;
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
`;

export const SaibaContainer = styled.nav`
    background: ${props => props.theme.header};
    padding: 1rem;
    width: 15rem;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px auto; 
    
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    a {
      color: ${props => props.theme.textColorVerde};
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    a:hover {
      color: ${props => props.theme.textColorVerdeHover};
    }
`;



export const MainContainer = styled.main`
  text-align: center;
  padding: 100px 20px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${props => props.theme.header};
  padding: 50px;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: ${props => props.theme.textColorAzul};
  margin: 20px auto 40px; 
  max-width: 41.2rem;
  text-align: center;
`;

export const Estrelas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${props => props.theme.textColorLaranja};
    font-size: 1.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  color: ${props => props.theme.textColorAzul};
  font-size: 1.8rem;
`;
