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

export const Titulo = styled.h1`
  margin: 2rem 0;
  font-size: 60px;
  text-align: center;
  color: #5D3FD3;
  font-weight: bold;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

export const AtivacaoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const PersoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const MonitoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const FeedbackContainer = styled.div`
  color: #F08080;
  margin-bottom: 3rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

`;

export const DespertarContainer = styled.div`
  color: #F08080;
  margin-bottom: 4rem;
  text-align: center;
  padding-top: 1.8rem;
  font-weight: bold;
  font-size: 37px;
`;

export const IntegracaoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;
`;

export const TextContainer1 = styled.div`
  color: #6699CC;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  margin-left: 16rem;
  margin-right: 15rem;
  margin-top: 1rem;
`;

export const TextContainer2 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  margin-left: 7rem;
  margin-right: 5rem;
  margin-top: 1rem;
`;

export const TextContainer3 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  line-height: 1.4; 
  margin-left: 16rem;
  margin-right: 15rem;
  margin-top: 1rem;
`;

export const TextContainer4 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  line-height: 1.4; 
  margin-left: 9.5rem;
  margin-right: 6rem;
  margin-top: 1rem;
`;

export const TextContainer5 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  line-height: 1.4;
  margin-left: 16rem;
  margin-right: 15rem;
  margin-top: 1rem;

`;

export const TextContainer6 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  line-height: 1.4; 
  margin-left: 9.5rem;
  margin-right: 6rem;
  margin-top: 1rem;
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
`;

export const TextoM1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 1.5rem;
  line-height: 1.2;
  margin-top: 0.5rem;
`;

export const TextoH2 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 39.8rem;
  margin-top: -24.18rem;
`;

export const TextoM2 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 30rem;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 0.5rem;

`;

export const TextoH3 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 68.3rem;
  margin-top: -24.18rem;
`;

export const TextoM3 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 57.5rem;
  margin-top: 0.5rem;
`;


export const TextoH4 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 96rem;
  margin-top: -24.18rem;
`;

export const TextoM4 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 88rem;
  margin-top: 0.5rem;
`;

export const TextoH5 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 12rem;
  margin-top: 10rem;
`;

export const TextoM5 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
`;

export const TextoH6 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 40rem;
  margin-top: -24.18rem;
`;

export const TextoM6 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 30rem;
  margin-top: 0.5rem;
`;

export const TextoH7 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 65rem;
  margin-top: -24.18rem;
`;

export const TextoM7 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 58rem;
  margin-top: 0.5rem;
`;

export const TextoH8 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 93rem;
  margin-top: -24.18rem;
`;

export const TextoM8 = styled.p`
  color: ${props => props.theme.textColorAzul};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 88rem;
  margin-top: 0.5rem;
`;

export const MainContainertwo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 2rem;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Define uma altura fixa para as imagens e ajuste a largura automaticamente
export const ImgProto = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 10rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgArduino = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 38rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgDiodo = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 65rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgRtc = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 95rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgFonte = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 36rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgMotor = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 7rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgCouro = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 95rem;
  margin-top: 0.5rem;
  width: auto;
`;

export const ImgDeitante = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 65rem;
  margin-top: 0.5rem;
  width: auto;
`;




