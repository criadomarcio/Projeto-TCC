

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

// Container Mais
export const MaisContainer = styled.h1`
  color: ${props => props.theme.header};
  margin-top: 4rem;
  margin-left: 3rem;
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 1rem;
  }
`;

// Container de Texto
export const TextContainer = styled.p`
  color: ${props => props.theme.header};
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-right: 73.2rem;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

// Container de Números
export const NumerosContainer = styled.div`  
  color: ${props => props.theme.textColorLaranja};
  display: flex;
  gap: 5rem;
  margin-left: 46rem;
  margin-top: -5rem;

  .numero-texto {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    div {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;
    text-align: left;
    
    .numero-texto {
      align-items: center;

      div {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

// Container de Imagens
export const ImagemContainer = styled.div`
  img {
    width: 60rem;
    height: 22.5rem;
    margin-left: 7rem; 
    border-radius: 2rem;
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
      margin-left: 0;
    }
  }
`;

// Container Tecnologia
export const Tecnologia = styled.h1`
  color: ${props => props.theme.header};
  text-align: center;
  margin-top: 15rem;

  @media (max-width: 768px) {
    margin-top: 8rem;
    font-size: 2.5rem;
  }
`;

// Subtítulo Tecnologia
export const Subtitulo = styled.p`
  color: ${props => props.theme.textColorLaranja};
  margin-top: 2rem;
  margin-left: 39rem;
  margin-right: 39rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

// Container de Imagens
export const Imagem1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-left: 10rem;
  width: fit-content;
  height: auto;
  gap: 20rem;

  img {
    width: 20rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0rem;
    gap: 10rem;

    img {
      width: 70%;
      height: 70%;
    }
  }
`;

// Texto H1
export const TextH1 = styled.h5`
  color: ${props => props.theme.textColorLaranja};
  margin-left: 10rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
    margin-top: -53.5rem;
  }
`;

// Texto Tecnologia 1
export const TextTec1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-top: 1rem;
  margin-left: 10rem;
  margin-right: 89.3rem;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Texto H2
export const TextH2 = styled.h5`
  color: ${props => props.theme.textColorLaranja};
  margin-left: 50rem;
  margin-top: -14.5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
    margin-top: 13rem;
  }
`;

// Texto Tecnologia 2
export const TextTec2 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-left: 50rem;
  margin-right: 48rem;
  font-size: 1.3rem;
  margin-top: 0.7rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Texto H3
export const TextH3 = styled.h5`
  color: ${props => props.theme.textColorLaranja};
  margin-left: 90rem;
  margin-right: 5rem;
  margin-top: -15.8rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
    margin-top: 23rem;
  }
`;

// Texto Tecnologia 3
export const TextTec3 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-top: 0.7rem;
  margin-left: 90rem;
  font-size: 1.3rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Container Público
export const Publico = styled.h1`
  color: ${props => props.theme.header};
  text-align: center;
  margin-top: 15rem;

  @media (max-width: 768px) {
    margin-top: 8rem;
    font-size: 2.5rem;
  }
`;

// Subtítulo Público
export const Subtitulo1 = styled.p`
  color: ${props => props.theme.textColorLaranja};
  text-align: center;
  margin-top: 2rem;
  margin-left: 33rem;
  margin-right: 33rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

// Container de Imagens Público
export const ImagemP1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-left: 10rem;
  width: fit-content;
  height: auto;
  gap: 20rem;

  img {
    width: 25rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 1rem;
    gap: 10rem;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

// Texto Público 1
export const TextPub1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 90rem;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-top: -48rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Texto Público 2
export const TextPub2 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-left: 50rem;
  margin-right: 45rem;
  font-size: 1.5rem;
  margin-top: -6.5rem;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 24rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Texto Público 3
export const TextPub3 = styled.p`
  color: ${props => props.theme.textColorAzul};
  margin-top: -5rem;
  margin-left: 90rem;
  font-size: 1.5rem;
  margin-right: 8rem;
  text-align: left;
  @media (max-width: 768px) {
    margin-top: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

// Container Objetivo
export const Objetivo = styled.h1`
  color: ${props => props.theme.header}; 
  text-align: center;
  margin-top: 15rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 8rem;
    font-size: 2.5rem;
  }
`;

// Texto H1 Objetivo
export const TextoH1 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

// Texto Objetivo 1
export const TextOb1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 20rem;
  line-height: 1.2;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

// Texto H2 Objetivo
export const TextoH2 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

// Texto Objetivo 2
export const TextOb2 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

// Texto H3 Objetivo
export const TextoH3 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

// Texto Objetivo 3
export const TextOb3 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 20rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;


