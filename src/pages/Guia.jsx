import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { 
  HeaderContainer, 
  LogoContainer, 
  NavContainer, 
  Titulo, 
  MainContainer, 
  Column, 
  AtivacaoContainer, 
  TextContainer1, 
  PersoContainer, 
  TextContainer3, 
  MonitoContainer, 
  TextContainer5,
  FeedbackContainer, 
  TextContainer2, 
  DespertarContainer, 
  TextContainer4, 
  IntegracaoContainer, 
  TextContainer6
} from './Guia.styles';

function Guia() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={logoImg} alt="Logo do site" />
        </LogoContainer>
        <NavContainer>
          <ul>
            <li><Link to="/">Início</Link></li>
          </ul>
          <ul>
            <li><Link to="/Guia">Funcionamento</Link></li>
          </ul>
          <ul>
            <li><Link to="/Referencias">Referências</Link></li>
          </ul>
          <ul>
            <li><Link to="/Quem">Integrantes</Link></li>
          </ul>
        </NavContainer>
      </HeaderContainer>

      <Titulo>Guia de Utilização</Titulo>

      <MainContainer>
        <Column>
          <AtivacaoContainer>
            <p>Ativação</p>
            <TextContainer1>
              Conecte o Deep Sleep a uma fonte de energia e pressione o botão de ligar.
            </TextContainer1>
          </AtivacaoContainer>

          <PersoContainer>
            <p>Personalização</p>
            <TextContainer3>
              Utilize o aplicativo móvel para ajustar as configurações de vibração de acordo com suas preferências pessoais.
            </TextContainer3>
          </PersoContainer>

          <MonitoContainer>
            <p>Monitoramento do Sono</p>
            <TextContainer5>
              Durante o sono, os sensores integrados monitoram os padrões de movimento e detectam os estágios do sono.
            </TextContainer5>
          </MonitoContainer>
        </Column>

        <Column>
          <FeedbackContainer>
            <p>Feedback Tátil</p>
            <TextContainer2>
              Com base nos dados coletados, o travesseiro inteligente oferece feedback tátil na forma de vibrações ajustáveis, promovendo o relaxamento e o conforto.
            </TextContainer2>
          </FeedbackContainer>

          <DespertarContainer>
            <p>Despertar Inteligente</p>
            <TextContainer4>
              Na hora programada, o Deep Sleep ativa o despertador, fornecendo um despertar suave e gradual para começar o dia com energia.
            </TextContainer4>
          </DespertarContainer>

          <IntegracaoContainer>
            <p>Integração com Dispositivos Inteligentes</p>
            <TextContainer6>
              Através da conectividade Wi-Fi, o Deep Sleep pode se integrar a outros dispositivos inteligentes, permitindo uma experiência de sono ainda mais personalizada e automatizada.
            </TextContainer6>
          </IntegracaoContainer>
        </Column>
      </MainContainer>
    </>
  );
}

export default Guia;
