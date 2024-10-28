import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import Ard from "../assets/arduino.jpg";
import Diodo from "../assets/diodo.jpg";
import Proto from "../assets/protoboard.jpg";
import Motor from "../assets/Motor.jpg";
import Fonte from "../assets/Fonte.jpg";
import Rtc from "../assets/RTC.jpg";
import Travesseiro from "../assets/travesseiro1.jpg";
import menuOpenIcon from '../assets/list.svg';
import closeIcon from '../assets/x.svg';
import { 
  HeaderContainer, 
  Titulo, 
  MainContainer, 
  AtivacaoContainer, 
  TextContainer1, 
  PersoContainer, 
  TextContainer3, 
  MonitoContainer, 
  TextContainer5,
  FeedbackContainer, 
  TextContainer2, 
  DespertarContainer, 
  TextContainer4, 
  IntegracaoContainer, 
  TextContainer6,
  Materiais,
  Column, 
  CarouselContainer,
  CarouselWrapper,
  CarouselSlide,
  PrevButton,
  NextButton
} from './Guia.styles';

function Guia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const images = [
    { src: Ard, alt: 'Controla os componentes eletrônicos do travesseiro, (R$ 99,90)', subtitle: 'Componentes Eletrônicos' },
    { src: Diodo, alt: 'Permite controlar o fluxo de corrente em apenas uma direção, (R$ 30,00)', subtitle: 'Diodo' },
    { src: Proto, alt: 'Possibilita construir circuitos de teste sem que haja necessidade de solda, (R$ 12,50)', subtitle: 'Protoboard' },
    { src: Motor, alt: 'Detecta movimentação e vibração do travesseiro, (R$ 20,00)', subtitle: 'Sensor de Movimento' },
    { src: Fonte, alt: 'Fornece energia para controlar todos os componentes do travesseiro, (R$ 8,17)', subtitle: 'Fonte de Energia' },
    { src: Rtc, alt: 'Módulo Relógio de Tempo Real, que conta com um sensor de temperatura, (R$ 23,90)', subtitle: 'RTC com Sensor' },
    { src: Travesseiro, alt: 'Oferece conforto para uma experiência de sono superior, (R$ 217,00)', subtitle: 'Travesseiro' },
    // Adicione mais imagens conforme necessário
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleMenu = () => {
    if (menuRef.current && iconRef.current) {
      const menu = menuRef.current;
      const icon = iconRef.current;

      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.src = menuOpenIcon;
      } else {
        menu.classList.add('open');
        icon.src = closeIcon;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3000 ms = 3 segundos

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [currentIndex]);

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
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <img className="icon" ref={iconRef} src={menuOpenIcon} alt="Menu Icon" />
              </button>
            </div>
          </nav>
          <div className="mobile-menu" ref={menuRef}>
            <ul>
              <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
              <li className="nav-item"><Link to="/Guia" className="nav-link">Guia</Link></li>
              <li className="nav-item"><Link to="/Referencias" className="nav-link">Referências</Link></li>
              <li className="nav-item"><Link to="/Quem" className="nav-link">Integrantes</Link></li>
            </ul>
          </div>
        </header>
      </HeaderContainer>

      <Titulo>Guia de utilização</Titulo>

      <MainContainer>
        <Column>
          <AtivacaoContainer>
            <p>Ativação</p>
            <TextContainer1>
              Conecte o Deep Sleep a uma fonte de energia e  através do aplicativo aperte o botão para ligar.
            </TextContainer1>
          </AtivacaoContainer>

          <PersoContainer>
            <p>Personalização</p>
            <TextContainer3>
              Utilize o aplicativo móvel para ajustar as configurações de vibração de acordo com suas preferências pessoais.
            </TextContainer3>
          </PersoContainer>

          <MonitoContainer>
            <p>Relaxamento</p>
            <TextContainer5>
              Durante o sono, os motores integrados causam vibrações relaxantes e melhoram a qualidade do sono.
            </TextContainer5>
          </MonitoContainer>
        </Column>

        <Column className="2">
          <FeedbackContainer>
            <p>Feedback Tátil</p>
            <TextContainer2>
              Com base nos dados coletados, o travesseiro inteligente oferece feedback tátil na forma de vibrações ajustáveis, promovendo o relaxamento e o conforto.
            </TextContainer2>
          </FeedbackContainer>

          <DespertarContainer>
            <p>Despertar Inteligente</p>
            <TextContainer4>
              Na hora programada, o Deep Sleep ativa o despertador, fornecendo um despertar suave e gradual para começar o dia com energia.
            </TextContainer4>
          </DespertarContainer>

          <IntegracaoContainer>
            <p>Integração com Dispositivos Inteligentes</p>
            <TextContainer6>
              Através da conectividade via Bluetooth, o Deep Sleep pode se integrar a outros dispositivos inteligentes, permitindo uma experiência de sono ainda mais personalizada e automatizada.
            </TextContainer6>
          </IntegracaoContainer>
        </Column>
      </MainContainer>

      <Materiais>Preço e função dos materiais</Materiais>

      <CarouselContainer>
        <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="subtitle">{image.subtitle}</div> {/* Subtítulo separado da imagem */}
            <div className="text">{image.alt}</div> {/* Texto descritivo da imagem */}
            
          </CarouselSlide>
        ))}
        </CarouselWrapper>
        <PrevButton onClick={handlePrev} aria-label="Slide anterior">❮</PrevButton>
        <NextButton onClick={handleNext} aria-label="Próximo slide">❯</NextButton>
      </CarouselContainer>

    </>
  );
}

export default Guia;