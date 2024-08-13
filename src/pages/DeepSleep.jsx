import React from 'react'
import logoImg from "../assets/logo.png";
import travesseiro from "../assets/travesseiro.png"
import tecnologia1 from "../assets/tecnologia1.png"
import tecnologia2 from "../assets/tecnologia2.png"
import tecnologia3 from "../assets/tecnologia3.png"
import publico1 from "../assets/publico1.png"
import { Link } from 'react-router-dom';
import { HeaderContainer, ImagemContainer, LogoContainer, MaisContainer, NavContainer, TextContainer } from './DeepSleep.styles'

import React from 'react'

function DeepSleep() {
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

    <MaisContainer>Deep Sleep</MaisContainer>
    <TextContainer>Descubra como o Deep Sleep pode revolucionar suas noites de sono, proporcionando conforto e bem-estar. Experimente o futuro da tecnologia do sono!</TextContainer>
    <ImagemContainer>
      <img src={travesseiro} alt="travesseiro Deep Sleep" />
    </ImagemContainer>
    </>
  )
}

export default DeepSleep