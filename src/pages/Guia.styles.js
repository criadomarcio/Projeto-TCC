
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
      right: 0; 
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



// Títulos e Containers
export const Titulo = styled.h1`
  margin-top: 6rem;
  font-size: 60px;
  text-align: center;
  color: #5D3FD3;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px; /* Tamanho mais legível para mobile */
    margin-top: 4rem; /* Reduz o espaço superior em telas menores */
  }
`;

export const MainContainer = styled.div`
  /* Adicione qualquer estilo específico aqui */
`;

export const AtivacaoContainer = styled.div`
  color: #F08080;
  margin-top: 5rem;
  margin-left: 10rem;
  margin-bottom: 2rem;
  
  .p{
    font-weight: bold; 
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem ;
  }
`;

export const TextContainer1 = styled.div`
  color: #6699CC;
  text-align: left;
  margin-right: 70rem;

  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
    font-size: 1rem;
    
  }
`;

export const PersoContainer = styled.div`
  color: #F08080;
  text-align: right;
  margin-right: 10rem;
  


  @media (max-width: 768px) {
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem;
    margin-left: 2rem;
  }
`;

export const TextContainer3 = styled.div`
  color: #6699CC;
  text-align: right;
  margin-left: 70rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    text-align: center;
    font-size: 1rem;
  }
`;

export const Column = styled.div`
  /* Adicione qualquer estilo específico aqui */
`;

export const MonitoContainer = styled.div`
  color: #F08080;
  margin-left: 10rem;
  margin-right: 70rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

export const TextContainer5 = styled.div`
  color: #6699CC;

  @media (max-width: 768px) {
  font-size: 1rem;
  }
`;

export const MainCoFeedbackContainerntainer = styled.div`
  /* Adicione qualquer estilo específico aqui */
`;

export const TextContainer2 = styled.div`
  color: #6699CC;
  text-align: right;
  margin-left: 70rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export const DespertarContainer = styled.div`
  color: #F08080;
  margin-left: 10rem;
  margin-right: 70rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

export const TextContainer4 = styled.div`
  color: #6699CC;

  @media (max-width: 768px) {
  font-size: 1rem;
  }
`;

export const IntegracaoContainer = styled.div`
  color: #F08080;
  text-align: right;
  margin-left: 70rem;
  margin-right: 10rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

export const TextContainer6 = styled.div`
  color: #6699CC;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const FeedbackContainer = styled.div`
  color: #F08080;
  text-align: right;
  margin-right: 10rem;

  @media (max-width: 768px) {
    margin-right: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;


// Estilização do componente Materiais
export const Materiais = styled.div`
  margin-top: 9rem;
  font-size: 60px;
  text-align: center;
  color: #5D3FD3;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-top: 5rem;
    font-size: 36px;
    margin-bottom: -2rem;
  }
`;

// Estilos base para as imagens
const baseImgStyles = `
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

// Imagens específicas com margens ajustadas
export const ImgProto = styled.img`${baseImgStyles} margin-left: 10rem; margin-top: 0.5rem;`;
export const ImgArduino = styled.img`${baseImgStyles} margin-left: 38rem; margin-top: 0.5rem;`;
export const ImgDiodo = styled.img`${baseImgStyles} margin-left: 65rem; margin-top: 0.5rem;`;
export const ImgRtc = styled.img`${baseImgStyles} margin-left: 95rem; margin-top: 0.5rem;`;
export const ImgHc05 = styled.img`${baseImgStyles} margin-left: 36rem; margin-top: 0.5rem;`;
export const ImgMotor = styled.img`${baseImgStyles} margin-left: 7rem; margin-top: 0.5rem;`;

// Estilização do botão de imagem
export const ImgBotao = styled.img`
  width: 250px; 
  margin-bottom: 10px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Estilo para o cabeçalho
export const TextH1 = styled.h2`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  margin-left: 13.7rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

// Estilo do card
export const Card = styled.div`
  background-color: #FFFFFF;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

// Estilização do carrossel
export const CarouselContainer = styled.div`
  top: 10rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px; /* Ajuste a altura conforme necessário */

  @media (max-width: 768px) {
    height: 380px; /* Reduz a altura do carrossel em telas menores */
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

// Botões de navegação do carrossel
export const NextButton = styled.button`
  position: absolute;
  top: 35%;
  right: 500px;
  transform: translateY(-50%);
  background-color: ${props => props.theme.pagesBackground};
  color: ${props => props.theme.textColorLaranja};
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  font-size: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.pagesBackground};
  }

  @media (max-width: 768px) {
    right: 20px; /* Ajusta o botão para o canto direito da tela */
    font-size: 1.2rem;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 35%;
  left: 500px;
  transform: translateY(-50%);
  background-color: ${props => props.theme.pagesBackground};
  color: ${props => props.theme.textColorLaranja};
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  font-size: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.pagesBackground};
  }

  @media (max-width: 768px) {
    left: 20px; /* Ajusta o botão para o canto esquerdo da tela */
    font-size: 1.2rem;
  }
`;



export const Video = styled.div`
  margin-top: 20rem;
  text-align: center; /* Centraliza o conteúdo */

  .h2 {
    color: ${props => props.theme.textColorLaranja};
    font-size: 2rem; /* Tamanho da fonte padrão */
    margin-bottom: 3rem;
  }

  /* Responsividade do iframe */
  iframe {
    width: 100%; /* A largura será 100% do elemento pai */
    height: auto; /* A altura será ajustada automaticamente */
    max-width: 560px; /* Define um limite máximo de largura */
    aspect-ratio: 16 / 9; /* Mantém a proporção do vídeo */
  }

  /* Estilos específicos para dispositivos móveis */
  @media (max-width: 768px) { /* Para telas menores que 768px */
    margin-top: 10rem; /* Reduz a margem superior em telas pequenas */
    
    .h2 {
      font-size: 1.25rem; /* Reduz o tamanho da fonte do título */
      margin-top: 20rem;
      margin-bottom: 4rem; /* Adiciona margem inferior para espaçamento */
    }
  }

  @media (max-width: 480px) { /* Para telas menores que 480px */
    .h2 {
      font-size: 1rem; /* Tamanho da fonte ainda menor */
    }

    iframe {
      max-width: 80%; /* Garante que o iframe não ultrapasse a largura do contêiner */
    }
  }
`;