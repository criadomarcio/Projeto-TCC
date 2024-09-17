import React from 'react';
import {
  Fun1Container, Fun2Container, Fun3Container, HeaderContainer, HumContainer1, ImgKayke, ImgRafael, ImgRenan, KaykeContainer, RafaelContainer,
  RenanContainer, CenterContainer, Container, InfoContainer, 
  LinkContainer} from './Quem.styles'; 
import logoImg from '../assets/logo.png';
import Kayke from "../assets/kayke.png";
import Renan from "../assets/renan.png";
import Rafael from "../assets/rafael.png";
import { Link } from 'react-router-dom';
import menuOpenIcon from '../assets/list.svg'; 
import closeIcon from '../assets/x.svg';

function Quem() {
  const menuShow = () => {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.src = menuOpenIcon;  
    } else {
      menuMobile.classList.add('open');
      icon.src = closeIcon;  
    }
  };

  return (
    <>
      <HeaderContainer>  
        <header>
          <nav className="nav-bar">
            <div className="logo">
              <img src={logoImg} alt="Logo da Deep Sleep" />
            </div>
            <div className="nav-list">
              <ul>
                <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
                <li className="nav-item"><Link to="/Guia" className="nav-link">Guia</Link></li>
                <li className="nav-item"><Link to="/Referencias" className="nav-link">Referências</Link></li> 
                <li className="nav-item"><Link to="/Quem" className="nav-link">Integrantes</Link></li>
              </ul>
            </div>
            
            <div className="mobile-menu-icon">
              <button onClick={menuShow}><img className="icon" src={menuOpenIcon} alt="Menu Icon" /></button>
            </div>
          </nav>
          <div className="mobile-menu">
            <ul>
              <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
              <li className="nav-item"><Link to="/Guia" className="nav-link">Guia</Link></li>
              <li className="nav-item"><Link to="/Referencias" className="nav-link">Referências</Link></li> 
              <li className="nav-item"><Link to="/Quem" className="nav-link">Integrantes</Link></li>
            </ul>
          </div>
        </header>
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
    
      <LinkContainer>
      <Link to="/Feedback">Entre em contato conosco</Link>
      </LinkContainer>
        
      
    </>
  );
}

export default Quem;
