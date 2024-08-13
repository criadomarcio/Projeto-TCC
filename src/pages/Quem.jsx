import React from 'react';
import { Fun1Container, Fun2Container, Fun3Container, HeaderContainer, HumContainer1,
  ImgKayke, ImgRafael, ImgRenan, KaykeContainer, LogoContainer, NavContainer,
  RafaelContainer, RenanContainer, CenterContainer } from './Quem.styles'; // Importa os estilos
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
          <img src={logoImg} alt="logo do site" />
        </LogoContainer>
        <NavContainer>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Guia">Funcionamento</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Referencias">Referências</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Quem">Integrantes</Link>
            </li>
          </ul>
        </NavContainer>
      </HeaderContainer>

      <HumContainer1>Quem somos?</HumContainer1>

        <CenterContainer>
          <ImgKayke src={Kayke} alt="kayke" />
          <KaykeContainer>Kayke Ferraz</KaykeContainer>
          <Fun1Container>Desenvolvedor de hardware, responsável pela programação.</Fun1Container>
        </CenterContainer>

        <CenterContainer>
          <ImgRenan src={Renan} alt="renan" />
          <RenanContainer>Renan Salvador</RenanContainer>
          <Fun2Container>Projetista de UX, responsável pela interface do usuário.</Fun2Container>
        </CenterContainer>

        <CenterContainer>
          <ImgRafael src={Rafael} alt="rafael" />
          <RafaelContainer>Rafael Rodrigues</RafaelContainer>
          <Fun3Container>Engenheiro de software, responsável em sensoriamento.</Fun3Container>
        </CenterContainer>
        
    </>
  );
}

export default Quem;
