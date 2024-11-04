import styled from 'styled-components';

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

    .logo {
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

export const HumContainer1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 10%;
  color: #5D3FD3;
  font-size: 60px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 5% 5%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 150px; 
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 30px;
    padding: 10px;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  max-width: 300px; 
`;

export const ImgKayke = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const KaykeContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Fun1Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ImgRenan = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const RenanContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Fun2Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ImgRafael = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const RafaelContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Fun3Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 5px; 
`;

export const LinkContainer = styled.h5`
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: ${props => props.theme.header};
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
    margin: 0;
  }
`;
