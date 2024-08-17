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
  margin: 2rem 0;
  font-size: 60px;
  text-align: center;
  color: #5D3FD3;
  font-weight: bold;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

export const AtivacaoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const PersoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const MonitoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const FeedbackContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const DespertarContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 1.8rem;
  font-weight: bold;
  font-size: 37px;

`;

export const IntegracaoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const TextContainer1 = styled.div`
  color: #6699CC;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4;
`;

export const TextContainer2 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4; 

`;

export const TextContainer3 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4; 

`;

export const TextContainer4 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4; 

`;

export const TextContainer5 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4; 

`;

export const TextContainer6 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: -0.5px; 
  line-height: 1.4; 
`;
