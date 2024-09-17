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
      right: 3rem; 
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
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem; /* Reduz o padding lateral no mobile */
    gap: 1rem; /* Adiciona espaçamento entre os itens */
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem; /* Espaçamento entre as colunas */
  }
`;

export const AtivacaoContainer = styled.div`
  ${baseTextContainerStyles}
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
    margin-bottom: 1.5rem; /* Reduz o espaço inferior no mobile */
  }
`;

export const PersoContainer = styled(AtivacaoContainer)`
  /* Sem mudanças, herda os estilos do AtivacaoContainer */
`;

export const MonitoContainer = styled(AtivacaoContainer)`
  /* Sem mudanças, herda os estilos do AtivacaoContainer */
`;

export const FeedbackContainer = styled(AtivacaoContainer)`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
    margin-bottom: 1.5rem; /* Alinha o espaçamento com outros containers no mobile */
  }
`;

export const DespertarContainer = styled(AtivacaoContainer)`
  margin-bottom: 4rem;
  padding-top: 1.8rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Reduz o espaço para evitar muito espaço no mobile */
  }
`;

export const IntegracaoContainer = styled(AtivacaoContainer)`
  /* Sem mudanças, herda os estilos do AtivacaoContainer */
`;

export const TextContainer1 = styled.div`
  ${baseTextContainerStyles}
  margin-left: 16rem;
  margin-right: 15rem;

  @media (max-width: 768px) {
    margin-left: 1rem; /* Margens mais compactas no mobile */
    margin-right: 1rem;
    text-align: center; /* Centraliza o texto para melhor alinhamento no mobile */
  }
`;

export const TextContainer2 = styled(TextContainer1)`
  margin-left: 7rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-left: 1rem; /* Ajuste para centralizar no mobile */
    margin-right: 1rem;
  }
`;

export const TextContainer3 = styled`
  line-height: 1.4;
  margin-left: 16rem;
  margin-right: 15rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextContainer4 = styled(TextContainer1)`
  margin-left: 9.5rem;
  margin-right: 6rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const TextContainer5 = styled(TextContainer1)`
  text-align: center;
  margin-right: 0;
  margin-left: 0;

  @media (max-width: 768px) {
    margin: 0; /* Remove margem no mobile */
  }
`;

export const TextContainer6 = styled(TextContainer4)`
  /* Sem mudanças, herda os estilos do TextContainer4 */
`;
export const Materiais = styled.h1`
  color: ${props => props.theme.header}; 
  text-align: center;
  margin-top: 15rem;
  width: 100%;
`;

export const TextoH1 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 13.7rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    margin-left: 8.5rem;
    margin-right: 5rem;
  }
`;

// Outros textos e imagens...
export const TextoM1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 1.5rem;
  line-height: 1.2;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 8rem;
    margin-right: 5rem;
    margin-top: 20rem;
  }
`;

// Continue com os demais textos e imagens no mesmo estilo...

export const MainContainertwo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0 1rem;
  }
`;

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

export const ImgProto = styled.img`${baseImgStyles} margin-left: 10rem; margin-top: 0.5rem;`;
export const ImgArduino = styled.img`${baseImgStyles} margin-left: 38rem; margin-top: 0.5rem;`;
export const ImgDiodo = styled.img`${baseImgStyles} margin-left: 65rem; margin-top: 0.5rem;`;
export const ImgRtc = styled.img`${baseImgStyles} margin-left: 95rem; margin-top: 0.5rem;`;
export const ImgFonte = styled.img`${baseImgStyles} margin-left: 36rem; margin-top: 0.5rem;`;
export const ImgMotor = styled.img`${baseImgStyles} margin-left: 7rem; margin-top: 0.5rem;`;

export const ImgBotao = styled.img`
  width: 250px; 
  margin-bottom: 10px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

export const CarouselContainer = styled.div`
  top: 10rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px; /* Ajuste a altura do carrossel conforme necessário */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; /* Organiza imagem e texto em coluna */
  justify-content: center; /* Centraliza imagem e texto verticalmente */
  align-items: center; /* Centraliza imagem e texto horizontalmente */
  position: relative; /* Permite o posicionamento absoluto do subtítulo */
  height: 100%; /* Garante que o slide ocupe toda a altura do container */
  
  img {
    max-width: 100%;
    max-height: 70%; /* Ajusta a altura máxima da imagem */
    object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
  }

  .text {
    margin-top: 10px; /* Espaço entre a imagem e o texto */
    font-size: 1rem; /* Tamanho da fonte do texto */
    color: ${props => props.theme.textColorAzul}; /* Cor do texto */
    text-align: center; /* Centraliza o texto */
    margin-right: 50rem;
    margin-left: 50rem;
  }

  .subtitle {
    position: absolute;
    top: -6px; /* Distância do topo da imagem */
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.textColorLaranja};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.5rem; /* Tamanho da fonte do subtítulo */
    text-align: center; /* Centraliza o subtítulo horizontalmente */
  }
`;

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
`;