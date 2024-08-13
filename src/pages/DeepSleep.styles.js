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
  }

  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }
`;

export const MaisContainer = styled.h1`
  /* Adicione estilos aqui se necessário */
`;

export const TextContainer = styled.p`

`

export const NumerosContainer = styled.p`

`

export const ImagemContainer = styled.img`
  
`