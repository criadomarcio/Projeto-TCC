import styled from "styled-components";

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

export const MainContainer = styled.main`
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TituloContainer = styled.h1`
  text-align: center;
  margin-top: 6rem;
  font-size: 60px;
  color: #5D3FD3;

  @media (max-width: 768px) {
    margin: 2rem;
    font-size: 2.5rem;
    text-align: left;
    margin-left: 3rem;
  }
`;

export const ImporContainer = styled.h2`
  color: #F08080;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 10rem;
  margin-top: 5rem;


  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;

export const Text1Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 10rem;
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
  margin-left: 50rem;
  margin-top: -14rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export const Text2Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 50rem;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 3-rem;
  margin-right: 45rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    max-width: 100%;
    margin-right: 0;
  }
`;

export const FreqContainer = styled.h2`
  color: #F08080;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 90rem;
  margin-top: -28rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export const Text3Container = styled.p`
  color: #6699CC;
  font-size: 1.5rem;
  margin-bottom: 200px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 90rem;
  margin-top: 0.5rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.2rem;
    max-width: 100%;
    margin-right: 0;
  }
`;
