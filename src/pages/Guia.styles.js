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

export const Titulo = styled.h1`
  margin: 4rem;
  font-size: 36px;
  text-align: center;
  color: #5D3FD3;
`;

export const Guide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const AtivacaoContainer = styled.h2`
  text-align: center;
  color: #F08080;
`;

export const Text1Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;

export const PersoContainer = styled.h2`
  color: #F08080;
  text-align: center;
  
`;

export const Text2Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;

export const MonitoContainer = styled.h2`
  color: #F08080;
  text-align: center;
`;

export const Text3Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;

export const FeedContainer = styled.h2`
  color: #F08080;
  text-align: center;
`;

export const Text4Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;

export const DespertarContainer = styled.h2`
  color: #F08080;
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
  
`;

export const Text6Container = styled.p`
  color: #6699CC;
  text-align: center;
  margin: 10px 0 40px;
`;
