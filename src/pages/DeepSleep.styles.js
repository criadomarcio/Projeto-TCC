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
  color: ${props => props.theme.header};
  margin-top: 4rem;
  margin-left: 3rem;
  font-size: 5rem;
`;

export const TextContainer = styled.p`
  color: ${props => props.theme.header};
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-right: 79.2rem;
  font-size: 1.8rem;
`;

export const NumerosContainer = styled.div`  
  color: ${props => props.theme.textColorLaranja};
  display: flex;
  gap: 2rem;
  margin-left: 75rem;
  margin-right: 70rem;
  margin-top: -12rem;
  font-size: 2rem;
  text-align: left;

`;

export const ImagemContainer = styled.div`
  img {
    width: 60rem;
    height: 22.5rem;
    margin-left: 22rem;
    border-radius: 2rem;
    margin-top: 10rem;
  }
`;
