import React from 'react';
import logoImg from "../assets/logo.png";
import travesseiro from "../assets/travesseiro.png";
import { Link } from 'react-router-dom';
import {
  HeaderContainer, ImagemContainer, MaisContainer, TextContainer, NumerosContainer,
  Imagem1, TextTec1, TextH1, TextH2, TextTec2, TextTec3, TextH3, Tecnologia,
  Subtitulo, Publico, Subtitulo1, ImagemP1, TextPub1, TextPub2, TextPub3, Objetivo,
  TextoH1, TextoH2, TextoH3, TextOb1, TextOb2, TextOb3, 
} from './DeepSleep.styles';
import Tecno1 from "../assets/tecnologia1.png";
import Tecno2 from "../assets/tecnologia2.png";
import Tecno3 from "../assets/tecnologia3.png";
import Men from "../assets/menino.jpg";
import Dorm from "../assets/dormindo.jpg";
import Insonia from "../assets/insonia.png";
import menuOpenIcon from '../assets/list.svg'; 
import closeIcon from '../assets/x.svg';

function DeepSleep() {
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

      <MaisContainer>Conheça o Deep Sleep</MaisContainer>
      <TextContainer>
        Descubra como o Deep Sleep pode revolucionar suas noites de sono, proporcionando conforto e bem-estar. Experimente o futuro da tecnologia do sono!
      </TextContainer>

      <NumerosContainer>
        <div className="numero-texto">
          <div>150+</div>
          <p>Qualidade superior</p>
        </div>
        <div className="numero-texto">
          <div>15</div>
          <p>Inovações garantidas</p>
        </div>
      </NumerosContainer>

      <ImagemContainer>
        <img src={travesseiro} alt="travesseiro Deep Sleep" />
      </ImagemContainer>

      <Tecnologia>Tecnologia do Deep Sleep</Tecnologia>
      <Subtitulo>
        Apresentamos o futuro travesseiro inteligente, conforto personalizado e monitoramento inteligente para melhorar sua qualidade de vida.
      </Subtitulo>

      <Imagem1>
        <img src={Tecno1} alt="tecnologia" />
        <img src={Tecno3} alt="tecnologia3" />
        <img src={Tecno2} alt="tecnologia2" />
      </Imagem1>

      <TextH1>Motores para Relaxamento</TextH1>
      <TextTec1>
      Os motores de vibração transmitem uma experiência de bem-estar, simulando uma massagem suave. É ideal para pausa do estresse e relaxamento, ajudando o usuário a sorrir corpo e mente.
      </TextTec1>

      <TextH2>Controle de Frequência de Vibração</TextH2>
      <TextTec2>
      Permite ajustar a intensidade da vibração de forma personalizada, indo de suave a intensa. Com isso, o usuário adapta o dispositivo para diferentes momentos, garantindo uma experiência sob medida.
      </TextTec2>

      <TextH3>Despertador Programável</TextH3>
      <TextTec3>
      O despertador vibratório é uma alternativa suave ao alarme tradicional, permitindo que o usuário acorde ou faça pausas no dia de forma tranquila e discreta, incentivando uma rotina de autocuidado.


      </TextTec3>

      <Publico>Público-Alvo Específico</Publico>
      <Subtitulo1>
        Nosso público-alvo inclui pessoas que enfrentam problemas com insônia, dificuldade de adormecer, estudantes e profissionais que precisam de concentração.
      </Subtitulo1>

      <ImagemP1>
        <img src={Dorm} alt="Publico" />
        <img src={Insonia} alt="Publico2" />
        <img src={Men} alt="Publico3" />
      </ImagemP1>

      <TextPub1>Pessoas que buscam um sono melhor e mais relaxante.</TextPub1>
      <TextPub2>Indivíduos que enfrentam problemas com insônia ou dificuldade de adormecer.</TextPub2>
      <TextPub3>Estudantes e profissionais que precisam de concentração e foco durante o dia.</TextPub3>

      <Objetivo>Objetivo</Objetivo>
      <TextoH1>Promover melhor qualidade de sono</TextoH1>
      <TextOb1>Proporcionar aos usuários uma experiência de sono mais tranquila, reparadora e revigorante.</TextOb1>

      <TextoH2>Gerenciar o tempo de sono</TextoH2>
      <TextOb2>Nosso travesseiro inteligente coleta dados detalhados sobre os padrões de sono de cada pessoa.</TextOb2>

      <TextoH3>Melhorar a saúde</TextoH3>
      <TextOb3>Uma boa noite de sono é essencial para a saúde física e mental.</TextOb3>
     </>
  
    
  );
}

export default DeepSleep;
