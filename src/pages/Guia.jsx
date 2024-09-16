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

  const containerRef = useRef(null); // Ref para o container do carrossel
  const carouselRef = useRef(null); // Ref para o carrossel

  const images = [
    { src: Ard, alt: 'Controla os componentes eletrônicos do travesseiro, (R$ 99,90)', subtitle: 'Componentes Eletrônicos' },
    { src: Diodo, alt: 'Permite controlar o fluxo de corrente em apenas uma direção, (R$ 30,00)', subtitle: 'Diodo' },
    { src: Proto, alt: 'Possibilita construir circuitos de teste sem que haja necessidade de solda, (R$ 12,50)', subtitle: 'Protoboard' },
    { src: Motor, alt: 'Detecta movimentação e vibração do travesseiro, (R$ 20,00)', subtitle: 'Sensor de Movimento' },
    { src: Fonte, alt: 'Fornece energia para controlar todos os componentes do travesseiro, (R$ 8,17)', subtitle: 'Fonte de Energia' },
    { src: Rtc, alt: 'Módulo Relógio de Tempo Real, que conta com um sensor de temperatura, (R$ 23,90)', subtitle: 'RTC com Sensor' },
    { src: Travesseiro, alt: 'Oferece conforto para uma experiência de sono superior, (R$ 217,00)', subtitle: 'Travesseiro' },
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
    const container = containerRef.current;
    const carousel = carouselRef.current;
    const carouselItems = carousel.querySelectorAll(".carrossel-item");

    let isMouseDown = false;
    let currentMousePos = 0;
    let lastMousePos = 0;
    let lastMoveTo = 0;
    let moveTo = 0;

    const createCarousel = () => {
      const carouselProps = onResize();
      const length = carouselItems.length;
      const degrees = 360 / length;
      const gap = 20;
      const tz = distanceZ(carouselProps.w, length, gap);
      const fov = calculateFov(carouselProps);
      const height = calculateHeight(tz);

      container.style.width = `${tz * 2 + gap * length}px`;
      container.style.height = `${height}px`;

      carouselItems.forEach((item, i) => {
        const degreesByItem = degrees * i + "deg";
        item.style.setProperty("--rotatey", degreesByItem);
        item.style.setProperty("--tz", `${tz}px`);
      });
    };

    const lerp = (a, b, n) => n * (a - b) + b;
    const distanceZ = (widthElement, length, gap) => widthElement / 2 / Math.tan(Math.PI / length) + gap;
    const calculateHeight = (z) => {
      const t = Math.atan((90 * Math.PI) / 180 / 2);
      return t * 2 * z;
    };
    const calculateFov = (carouselProps) => {
      const perspective = window.getComputedStyle(container).perspective.split("px")[0];
      const length = Math.sqrt(carouselProps.w * carouselProps.w) + Math.sqrt(carouselProps.h * carouselProps.h);
      return 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
    };
    const getPosX = (x) => {
      currentMousePos = x;
      moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
      lastMousePos = currentMousePos;
    };

    const update = () => {
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      carousel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
      requestAnimationFrame(update);
    };

    const onResize = () => {
      const boundingCarousel = container.getBoundingClientRect();
      return { w: boundingCarousel.width, h: boundingCarousel.height };
    };

    const initEvents = () => {
      carousel.addEventListener("mousedown", () => {
        isMouseDown = true;
        carousel.style.cursor = "grabbing";
      });
      carousel.addEventListener("mouseup", () => {
        isMouseDown = false;
        carousel.style.cursor = "grab";
      });
      container.addEventListener("mouseleave", () => (isMouseDown = false));
      carousel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX));
      carousel.addEventListener("touchstart", () => {
        isMouseDown = true;
        carousel.style.cursor = "grabbing";
      });
      carousel.addEventListener("touchend", () => {
        isMouseDown = false;
        carousel.style.cursor = "grab";
      });
      container.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX));
      window.addEventListener("resize", createCarousel);
      update();
      createCarousel();
    };

    initEvents();
  }, []);

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
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <img className="icon" ref={iconRef} src={menuOpenIcon} alt="Menu Icon" />
              </button>
            </div>
          </nav>
          <div className="mobile-menu" ref={menuRef}>
            <ul>
              <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
              <li className="nav-item"><Link to="/Guia" className="nav-link">Funcionamento</Link></li>
              <li className="nav-item"><Link to="/Referencias" className="nav-link">Referências</Link></li>
              <li className="nav-item"><Link to="/Quem" className="nav-link">Integrantes</Link></li>
            </ul>
          </div>
        </header>
      </HeaderContainer>

      <Titulo>Funcionamento</Titulo>

      <MainContainer>
        <Column>
          <AtivacaoContainer>
            <p>Ativação</p>
            <TextContainer1>
              Conecte o Deep Sleep a uma fonte de energia e pressione o botão de ligar.
            </TextContainer1>
          </AtivacaoContainer>

          <PersoContainer>
            <p>Personalização</p>
            <TextContainer3>
              Utilize o aplicativo móvel para ajustar as configurações de vibração de acordo com suas preferências pessoais.
            </TextContainer3>
          </PersoContainer>

          <MonitoContainer>
            <p>Monitoramento do Sono</p>
            <TextContainer5>
              Durante o sono, os sensores integrados monitoram os padrões de movimento e detectam os estágios do sono.
            </TextContainer5>
          </MonitoContainer>
        </Column>

        <Column>
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
              Através da conectividade Wi-Fi, o Deep Sleep pode se integrar a outros dispositivos inteligentes, permitindo uma experiência de sono ainda mais personalizada e automatizada.
            </TextContainer6>
          </IntegracaoContainer>
        </Column>
      </MainContainer>

      <Materiais>Preço e função dos materiais</Materiais>
      <div className="container-carrossel">
      <CarouselContainer ref={containerRef}>
        <CarouselWrapper className="carrossel" ref={carouselRef}>
          {images.map((image, index) => (
            <CarouselSlide key={index} className="carrossel-item">
              <img src={image.src} alt={image.alt} />
              <p className="subtitle">{image.subtitle}</p>
            </CarouselSlide>
          ))}
        </CarouselWrapper>
        <PrevButton onClick={handlePrev}>Prev</PrevButton>
        <NextButton onClick={handleNext}>Next</NextButton>
      </CarouselContainer>
      </div>
    </>
  );
}

export default Guia;
