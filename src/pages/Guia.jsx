import React from 'react';
import logoImg from '../assets/logo.png';
import { HeaderContainer, LogoContainer, GuideContainer, NavContainer, Titulo, AtivacaoContainer, Text1Container, PersoContainer, Text2Container, MonitoContainer, Text3Container, FeedContainer, Text4Container, DespertarContainer, Text5Container, IntegracaoContainer, Text6Container } from './Guia.styles';
import { Link } from 'react-router-dom';

function Guia() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={logoImg} alt="logo do site" />
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

    <GuideContainer>
      <Titulo>Guia de utilização</Titulo>
      <AtivacaoContainer>Ativação</AtivacaoContainer>
      <Text1Container>
        Conecte o Deep Sleep a uma fonte de energia e pressione o botão de ligar.
      </Text1Container>
      <PersoContainer>
        Personalização
      </PersoContainer>
      <Text2Container>
        Utilize o aplicativo móvel para ajustar as configurações de vibração de acordo com suas preferências pessoais.
      </Text2Container>
      <MonitoContainer>
        Monitoramento do Sono
      </MonitoContainer>
      <Text3Container>
        Durante o sono, os sensores integrados monitoram os padrões de movimento e detectam os estágios do sono.
      </Text3Container>
      <FeedContainer>
        Feedback Tátil
      </FeedContainer>
      <Text4Container>
        Com base nos dados coletados, o travesseiro inteligente oferece feedback tátil na forma de vibrações ajustáveis, promovendo o relaxamento e o conforto.
      </Text4Container>
      <DespertarContainer>
        Despertar Inteligente
      </DespertarContainer>
      <Text5Container>
        Na hora programada, o Deep Sleep ativa o despertador, fornecendo um despertar suave e gradual para começar o dia com energia.
      </Text5Container>
      <IntegracaoContainer>
        Integração com Dispositivos Inteligentes
      </IntegracaoContainer>
      <Text6Container>
        Através da conectividade Wi-Fi, o Deep Sleep pode se integrar a outros dispositivos inteligentes, permitindo uma experiência de sono ainda mais personalizada e automatizada.
      </Text6Container>
    </GuideContainer>
    </>
  );
};

export default Guia;
