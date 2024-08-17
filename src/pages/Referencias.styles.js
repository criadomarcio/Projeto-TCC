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

export const MainContainer = styled.main`
  text-align: left;
  padding: 20px 20px;
`;


export const TituloContainer = styled.h1`
    text-align: center;
    margin: 4rem;
    color: #5D3FD3;
`

export const ImporContainer = styled.h2`
  color: #F08080;
`

export const Text1Container = styled.p`
  color: #6699CC;
  margin: 1rem;
`
export const UsoContainer = styled.h2`
  color: #F08080;
`
export const Text2Container = styled.p`
  color: #6699CC;
  margin: 1rem;
`

export const FreqContainer = styled.h2`
  color: #F08080;
`

export const Text3Container = styled.p`
  color: #6699CC;
  margin: 1rem;
`