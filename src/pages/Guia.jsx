import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import Ard from "../assets/arduino.jpg";
import Couro from "../assets/travesseiro2.jpg";
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
  TextoH1,
  TextoH2,
  TextoH3,
  TextoH4,
  TextoH5,
  TextoH6,
  TextoH7,
  TextoH8,
  TextoM1,
  TextoM2,
  TextoM3,
  TextoM4,
  TextoM5,
  TextoM6,
  TextoM7,
  TextoM8,
  ImgProto,
  ImgArduino,
  ImgDiodo,
  ImgRtc,
  ImgFonte,
  ImgMotor,
  ImgCouro,
  ImgDeitante,
  Column
} from './Guia.styles';

function Guia() {
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


      <Titulo>Guia de Utilização</Titulo>

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

        
          <TextoH1>Protoboard</TextoH1>
          <ImgProto src={Proto} alt="Protoboard" />
          <TextoM1>Possibilita construir circuitos de teste sem que haja necessidade de solda, (R$ 12,50)</TextoM1>
      

        
          <TextoH2>Placa Arduino Uno</TextoH2>
          <ImgArduino src={Ard} alt="Arduino" />
          <TextoM2>Controla os componentes eletrônicos do travesseiro, (R$ 99,90)</TextoM2>
        

       
          <TextoH3>Diodo 1N4007</TextoH3>
          <ImgDiodo src={Diodo} alt="Diodo" />
          <TextoM3>Permite controlar o fluxo de corrente em apenas uma direção, (R$ 30,00)</TextoM3>

       
          <TextoH4>Módulo RTC DS3231</TextoH4>
          <ImgRtc src={Rtc} alt="RTC" />
          <TextoM4>Módulo Relógio de Tempo Real, que conta com um sensor de temperatura, (R$ 23,90)</TextoM4>

        
          <TextoH5>Motor Vibratório</TextoH5>
          <ImgMotor src={Motor} alt="Motor Vibratório" />
          <TextoM5>Utilizado para controlar as vibrações do travesseiro, (R$ 20,00)</TextoM5>

        
          <TextoH6>Fonte de Alimentação</TextoH6>
          <ImgFonte src={Fonte} alt="Fonte de Alimentação" />
          <TextoM6>Fornece energia para controlar todos os componentes do travesseiro, (R$ 8,17)</TextoM6>
        

        
          <TextoH7>Travesseiro Ergonômico</TextoH7>
          <ImgDeitante src={Travesseiro} alt="Travesseiro Ergonômico" />
          <TextoM7>Oferece conforto para uma experiência de sono superior, (R$ 217,00)</TextoM7>
        

        
          <TextoH8>Abertura em Tecido de Couro</TextoH8>
          <ImgCouro src={Couro} alt="Couro" />
          <TextoM8>Proteger e adicionar um compartimento para carregamento, (R$ 50,00)</TextoM8>
        
      
    </>
  );
}

export default Guia;
