import React from 'react';
import { HeaderContainer, LogoContainer, NavContainer, MainContainer, Title, Subtitle, Estrelas, Footer, SaibaContainer } from "./Home.sytes"; 
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

export function Home() {
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
