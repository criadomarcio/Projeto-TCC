import React from 'react';
import logoImg from "../assets/logo.png";
import travesseiro from "../assets/travesseiro.png";
import { Link } from 'react-router-dom';
import { HeaderContainer, ImagemContainer, LogoContainer, MaisContainer, NavContainer, TextContainer,NumerosContainer } from './DeepSleep.styles';

function DeepSleep() {
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

      <MaisContainer>Conheça o Deep Sleep</MaisContainer>
      <TextContainer>
      Descubra como o Deep Sleep pode revolucionar suas noites de sono, proporcionando conforto e bem-estar. Experimente o futuro da tecnologia do sono!
      </TextContainer>
      <NumerosContainer>
        <div>150+ Qualidade superior</div>
        <div>15 Inovações garantidas</div>
      </NumerosContainer>
      <ImagemContainer>
        <img src={travesseiro} alt="travesseiro Deep Sleep" />
      </ImagemContainer>
    </>
  );
}

export default DeepSleep;












//https://5173-kaykeferraz0-projetotcc-yrfkarbm2rc.ws-us115.gitpod.io/