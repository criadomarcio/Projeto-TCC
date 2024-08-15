import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  GuideContainer, // Ensure this is imported if used
  Titulo,
  AtivacaoContainer,
  Text1Container,
  PersoContainer,
  Text2Container,
  MonitoContainer,
  Text3Container,
  FeedContainer,  // Ensure this is imported
  Text4Container, // Ensure this is imported
  DespertarContainer,
  Text5Container,
  IntegracaoContainer,
  Text6Container
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
            <li><Link to="/Guia">Funcionamento</Link></li>
            <li><Link to="/Referencias">Referências</Link></li>
            <li><Link to="/Quem">Integrantes</Link></li>
          </ul>
        </NavContainer>
      </HeaderContainer>

      <GuideContainer>
        <Titulo>Guia de Utilização</Titulo>
        <AtivacaoContainer>Ativação</AtivacaoContainer>
        <Text1Container>
          Conecte o Deep Sleep a uma fonte de energia e pressione o botão de ligar.
        </Text1Container>
        <PersoContainer>Personalização</PersoContainer>
        <Text2Container>
          Utilize o aplicativo móvel para ajustar as configurações de vibração de acordo com suas preferências pessoais.
        </Text2Container>
        <MonitoContainer>Monitoramento do Sono</MonitoContainer>
        <Text3Container>
          Durante o sono, os sensores integrados monitoram os padrões de movimento e detectam os estágios do sono.
        </Text3Container>
        <FeedContainer>Feedback Tátil</FeedContainer>
        <Text4Container>
          Com base nos dados coletados, o travesseiro inteligente oferece feedback tátil na forma de vibrações ajustáveis, promovendo o relaxamento e o conforto.
        </Text4Container>
        <DespertarContainer>Despertar Inteligente</DespertarContainer>
        <Text5Container>
          Na hora programada, o Deep Sleep ativa o despertador, fornecendo um despertar suave e gradual para começar o dia com energia.
        </Text5Container>
        <IntegracaoContainer>Integração com Dispositivos Inteligentes</IntegracaoContainer>
        <Text6Container>
          Através da conectividade Wi-Fi, o Deep Sleep pode se integrar a outros dispositivos inteligentes, permitindo uma experiência de sono ainda mais personalizada e automatizada.
        </Text6Container>
      </GuideContainer>
    </>
  );
}

export default Guia;
