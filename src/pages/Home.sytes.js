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
  margin: 20px auto 60px; 
  max-width: 41.2rem;
  text-align: center;
`;


export const SaibaContainer = styled.div`
  background: ${props => props.theme.header};
  padding: 1.2rem;
  max-width: 11.5rem;
  margin: 0 auto;
  margin-top: 60px; 
  border-radius: 4.5rem;

  ul {
    list-style: none;
  }

  li {
    margin: 0;
  }

  a {
    color: ${props => props.theme.textColorVerde};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }
`;


export const Estrelas = styled.div`
  margin: 1rem;
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
