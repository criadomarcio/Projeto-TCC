import React from 'react';
import { HeaderContainer, MainContainer, Title, Subtitle, Estrelas, Footer, SaibaContainer } from "./Home.styles"; 
import logoImg from '../assets/logo.png';
import menuOpenIcon from '../assets/list.svg'; 
import closeIcon from '../assets/x.svg'; 
import { Link } from 'react-router-dom';

export function Home() {
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
                <li className="nav-item"><Link to="/Guia" className="nav-link">Funcionamento</Link></li>
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
              <li className="nav-item"><Link to="/Guia" className="nav-link">Funcionamento</Link></li>
              <li className="nav-item"><Link to="/Referencias" className="nav-link">Referências</Link></li> 
              <li className="nav-item"><Link to="/Quem" className="nav-link">Integrantes</Link></li>
            </ul>
          </div>
        </header>
      </HeaderContainer>  

      <MainContainer>
        <Title>Deep Sleep</Title>
        <Subtitle>Um travesseiro inteligente que ajuda pessoas a dormir melhor com sensores de vibração. Conheça nosso produto inovador!</Subtitle>
        <SaibaContainer>
          <ul>
            <li>
              <Link to="/DeepSleep">Saiba Mais</Link>
            </li>
          </ul>
        </SaibaContainer>
        <Estrelas>
          <span>★ ★ ★ ★ ★</span>
        </Estrelas>
        <Footer>Excelente para uma noite tranquila de sono</Footer>
      </MainContainer>
    </>
  );
}
