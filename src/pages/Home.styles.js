import styled from 'styled-components';

// Container Principal
export const MainContainer = styled.main`
  text-align: center;
  padding: 100px 20px;

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

// Título Principal
export const Title = styled.h1`
  font-size: 5rem;
  color: ${props => props.theme.header};
  padding: 50px;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 30px 10px;
  }
`;

// Subtítulo
export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: ${props => props.theme.textColorAzul};
  margin: 20px auto 60px; 
  max-width: 41.2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 90%;
    margin: 20px auto;
  }
`;

// Container Saiba Mais
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

  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 30px;
  }
`;

// Container Estrelas
export const Estrelas = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${props => props.theme.textColorLaranja};
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.2rem;
    }
  }
`;

// Footer
export const Footer = styled.footer`
  margin-top: 20px;
  color: ${props => props.theme.textColorAzul};
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

// Container do Header
export const HeaderContainer = styled.div`
  background: ${props => props.theme.header};
  padding: 1rem;

  .header {
    background-color: #00040D; 
    box-shadow: 0px 3px 10px #464646; 
  }

  .nav-bar img {
    padding: 0;
    height: 65px; 
    width: auto;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 0; 
    align-items: center;
  }

  .nav-list {
    display: flex;
    align-items: center;
  }

  .nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .nav-item {
    margin: 0 15px;
  }

  .nav-link {
    text-decoration: none;
    font-size: 24px; 
    color: ${props => props.theme.textColorLaranja};
    font-weight: 400;
    cursor: pointer;
    border: none;
    text-align: right;
  }

  .nav-link:hover {
    color: ${props => props.theme.textColorLaranja}; 
  }

  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 730px) {
    background: ${props => props.theme.header};
    margin-top: -3rem;

    .nav-bar {
      padding: 1.5rem 2rem;
    }

    .logo{
      margin-left: -2rem;
      margin-top: 2.8rem;
    }

    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.header}; 
      z-index: 1000;
    }

    .mobile-menu-icon button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .mobile-menu-icon .icon {
      margin-top: 1.9rem;
      width: 40px;
      height: 40px;
      color: ${props => props.theme.textColorLaranja}; 
    }

    .mobile-menu {
      position: fixed;
      top: 1rem; 
      right: -0.1rem; 
      width: 200px;
      background: ${props => props.theme.header}; 
      border-radius: 0.5rem;
      display: none; 
      align-items: center;
      padding: 1rem;
      transition: opacity 0.3s;
      opacity: 0; 
    }

    .mobile-menu.open {
      display: flex; 
      opacity: 1; 
    }

    .mobile-menu ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      margin-top: 6rem;
    }

    .mobile-menu .nav-item {
      display: block;
      padding: 1rem;
    }
  }
`;
