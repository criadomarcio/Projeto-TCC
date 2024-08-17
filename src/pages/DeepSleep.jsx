import React from 'react';
import logoImg from "../assets/logo.png";
import travesseiro from "../assets/travesseiro.png";
import { Link } from 'react-router-dom';
import { HeaderContainer, ImagemContainer, LogoContainer, MaisContainer, NavContainer, TextContainer,NumerosContainer, Imagem1, TextTec1, TextH1, TextH2, TextTec2, TextTec3, TextH3, Tecnologia, Subtitulo, Publico, Subtitulo1, ImagemP1, TextPub1, TextPub2, TextPub3, Objetivo, TextoH1, TextoH2, TextoH3, TextOb1, TextOb2, TextOb3 } from './DeepSleep.styles';
import Tecno1 from "../assets/tecnologia1.png";
import Tecno2 from "../assets/tecnologia2.png";
import Tecno3 from "../assets/tecnologia3.png";
import Men from "../assets/menino.jpg";
import Dorm from "../assets/dormindo.jpg";
import Insonia from "../assets/insonia.png";


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
      <Subtitulo>Apresentamos o futuro travesseiro inteligente, conforto personalizado e monitoramento inteligente para melhorar sua qualidade de vida.</Subtitulo>

      <Imagem1>
        <img src={Tecno1} alt="tecnologia" />
        <img src={Tecno3} alt="tecnologia3" />
        <img src={Tecno2} alt="tecnologia2" />

      </Imagem1>


      <TextH1>Tecnologia de Ponta</TextH1>
      <TextTec1>Utilizando sensores de vibração avançados, o Deep Sleep é capaz de detectar e acompanhar os seus movimentos durante o sono. Essa tecnologia permite que o travesseiro ajuste automaticamente a firmeza, garantindo o máximo conforto e apoio para sua cabeça e pescoço.</TextTec1>

      <TextH2>Conforto Personalizado</TextH2>
      <TextTec2>Cada pessoa tem necessidades únicas quando se trata de conforto no sono. O Deep Sleep ajusta automaticamente a firmeza com base no seu peso, posição de sono preferida e até mesmo no seu histórico de movimentação durante a noite. Assim, você sempre terá o nível ideal de maciez para uma noite de sono reparadora.</TextTec2>

      <TextH3>Monitoramento Inteligente</TextH3>
      <TextTec3>Além de ajustar a firmeza, o Deep Sleep também monitora seus padrões de sono. Ele analisa dados como tempo total de sono, qualidade do sono, movimentação durante a noite e muito mais. Com base nesses insights, o Deep Sleep é capaz de sugerir pequenas mudanças em seus hábitos que podem melhorar significativamente a qualidade do seu sono.</TextTec3>



      <Publico>Público-Alvo Específico </Publico>
      <Subtitulo1>Nosso público-alvo inclui pessoas que enfrentam problemas com insônia, dificuldade de adormecer, estudantes e profissionais que precisam de concentração. Oferecemos soluções personalizadas para um sono mais tranquilo e reparador.</Subtitulo1>

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
      <TextOb1>Proporcionar aos usuários uma experiência de sono mais tranquila, reparadora e revigorante. Queremos que nossos clientes acordem todos os dias sentindo-se descansados, energizados e prontos para enfrentar os desafios do dia a dia.</TextOb1>

      <TextoH2>Gerenciar o tempo de sono</TextoH2>
      <TextOb2>Além de garantir um sono de alta qualidade, nosso travesseiro inteligente também coleta dados detalhados sobre os padrões de sono de cada pessoa. Com essa análise, os usuários podem compreender melhor seus hábitos de sono e fazer ajustes para otimizar o tempo que passam descansando.</TextOb2>

      <TextoH3>Melhorar a saúde</TextoH3>
      <TextOb3>Uma boa noite de sono é essencial para a saúde física e mental. Ao ajudar as pessoas a dormirem melhor, nosso produto contribui para um estilo de vida mais saudável e equilibrado, com benefícios que se estendem por todo o dia.</TextOb3>
    </>
  );
}

export default DeepSleep;









