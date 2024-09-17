import React from 'react'
import { FreqContainer, HeaderContainer, ImporContainer, MainContainer, Text1Container, Text2Container, Text3Container, TituloContainer, UsoContainer } from './Referencias.styles'
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';
import menuOpenIcon from '../assets/list.svg'; 
import closeIcon from '../assets/x.svg';

function Referencias() {
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

      
    <TituloContainer id='Rf_'>Referências bibliográficas</TituloContainer>
    <MainContainer>
    <ImporContainer>Importância do sono:</ImporContainer>
    <Text1Container>O sono é muito importante na nossa vida e se não dormimos não conseguimos sobreviver. A importância  do sono é que quando estamos dormindo o organismo regula o sistema imunológico, o sistema hormonal e recompõe os neurotransmissores.</Text1Container>
    <UsoContainer>Uso de vibrações:</UsoContainer>
    <Text2Container>A vibração no sono oferece diversos benefícios, incluindo relaxamento muscular, redução do estresse e ansiedade, melhoria na circulação sanguínea, alívio de dores, promoção do sono profundo, melhoria no despertar e estímulo ao sistema sensorial. Esses efeitos contribuem para uma melhor qualidade de sono e bem-estar geral, embora os resultados possam variar de pessoa para pessoa.</Text2Container>
    <FreqContainer>Frequências de vibração:</FreqContainer>
    <Text3Container>É importante para as pessoas experimentarem diferentes frequências para encontrar aquela que funciona melhor para elas. Algumas pessoas podem responder melhor a frequências mais baixas, enquanto outras podem se beneficiar mais de frequências mais altas. Além disso, a intensidade da vibração também pode influenciar os efeitos no sono. Recomenda-se começar com frequências mais baixas e aumentar gradualmente conforme necessário, sempre prestando atenção à própria resposta e conforto. Este método permite uma adaptação mais suave e personalizada, ajudando a encontrar a frequência ideal para promover um sono melhor.</Text3Container>
    </MainContainer>
    </>



  )
}

export default Referencias