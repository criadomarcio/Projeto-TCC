// src/pages/Guia.styles.js
import styled from 'styled-components';

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
  gap: 20px;
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
  }
  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }
`;

export const GuideContainer = styled.div`
  // Your styles here
`;

export const Titulo = styled.h1`
  margin: 2rem;
  font-size: 36px;
  text-align: center;
  color: #5D3FD3;
`;

export const AtivacaoContainer = styled.h2`
  margin: 1rem auto;
  color: #F08080;
  text-align: center;
`;

export const Text1Container = styled.div`
  color: #6699CC;
  margin: 1rem auto;
  text-align: center;
`;

export const PersoContainer = styled.h2`
  color: #F08080;
  margin: 1rem auto;
  text-align: center;
`;

export const Text2Container = styled.p`
  color: #6699CC;
  margin: 1rem auto;
  text-align: center;
`;

export const MonitoContainer = styled.h2`
  color: #F08080;
  margin: 1rem auto;
  text-align: center;
`;

export const Text3Container = styled.p`
  color: #6699CC;
  margin: 1rem auto;
  text-align: center;
`;

// Ensure FeedContainer and Text4Container are exported
export const FeedContainer = styled.h2`
  color: #F08080;
  margin: 1rem auto;
  text-align: center;
`;

export const Text4Container = styled.p`
  color: #6699CC;
  margin: 1rem auto;
  text-align: center;
`;

export const DespertarContainer = styled.h2`
  color: #F08080;
  margin: 1rem auto;
  text-align: center;
`;

export const Text5Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;

export const IntegracaoContainer = styled.h2`
  color: #F08080;
  text-align: center;
  margin: 1rem auto;
`;

export const Text6Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;
