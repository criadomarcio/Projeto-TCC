import React from 'react';
import { EntContainer, SubtitleContainer, TxtContainer, Txt2Container, Sub2titleContainer, Txt3Container } from './Feedback.style';
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <>
     

      <EntContainer>Entre em contato conosco</EntContainer>
      <TxtContainer>Estamos ansiosos para ouvir de você. Entre em contato para mais informações sobre o travesseiro inteligente e como ele pode melhorar sua qualidade de sono.</TxtContainer>
      <SubtitleContainer>Informações</SubtitleContainer>
      <Txt2Container>contato@travesseirointeligente.com</Txt2Container>
      <Sub2titleContainer>Suporte</Sub2titleContainer>
      <Txt3Container>telefone@travesseirointeligente.com</Txt3Container>
     
    </>
  );
};

export default Feedback;
