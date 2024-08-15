import React from 'react';
import {
  Fun1Container, Fun2Container, Fun3Container, HeaderContainer, HumContainer1,
  HumContainer2, ImgKayke, ImgRafael, ImgRenan, KaykeContainer, LogoContainer, NavContainer, RafaelContainer,
  RenanContainer, CenterContainer, Container, InfoContainer
} from './Quem.styles'; // Certifique-se de que este caminho está correto
import logoImg from '../assets/logo.png';
import Kayke from "../assets/kayke.png";
import Renan from "../assets/renan.png";
import Rafael from "../assets/rafael.png";
import { Link } from 'react-router-dom';

function Quem() {
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

      <HumContainer1>Quem somos?</HumContainer1>

      <Container>
        <CenterContainer>
          <ImgKayke src={Kayke} alt="Kayke Ferraz" />
          <InfoContainer>
            <KaykeContainer>Kayke Ferraz</KaykeContainer>
            <Fun1Container>Desenvolvedor de hardware, responsável pela programação.</Fun1Container>
          </InfoContainer>
        </CenterContainer>

        <CenterContainer>
          <ImgRenan src={Renan} alt="Renan Salvador" />
          <InfoContainer>
            <RenanContainer>Renan Salvador</RenanContainer>
            <Fun2Container>Projetista de UX, responsável pela interface do usuário.</Fun2Container>
          </InfoContainer>
        </CenterContainer>

        <CenterContainer>
          <ImgRafael src={Rafael} alt="Rafael Rodrigues" />
          <InfoContainer>
            <RafaelContainer>Rafael Rodrigues</RafaelContainer>
            <Fun3Container>Engenheiro de software, responsável em sensoriamento.</Fun3Container>
          </InfoContainer>
        </CenterContainer>
      </Container>

      <li><Link to="/">Entre em contato conosco</Link></li>
      
     
    </>
  );
}

export default Quem;
