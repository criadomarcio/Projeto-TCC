import React from 'react';
import {
  EntContainer, SubtitleContainer, TxtContainer, Txt2Container, Sub2titleContainer, Txt3Container, 
  FormContainer, FormGroup, FormLabel, FormInput, FormTextArea, SubmitButton, 
  Contato
} from './Feedback.style'; // Ajuste o caminho se necessário

import whats from "../assets/whatsapp-logo.svg"
import insta from "../assets/instagram.svg"
import ttk from "../assets/tiktok.svg"

const FeedbackPage = ({ children }) => {
  return <div className="feedback-page">{children}</div>;
};

const Feedback = () => {
  return (
    <>
    <FeedbackPage>
      <div className="info-section">
        <EntContainer>Entre em contato conosco</EntContainer>
        <TxtContainer>Estamos ansiosos para ouvir de você. Entre em contato para mais informações sobre o travesseiro inteligente e como ele pode melhorar sua qualidade de sono.</TxtContainer>
        <SubtitleContainer>Informações</SubtitleContainer>
        <Txt2Container>contato@travesseirointeligente.com</Txt2Container>
        <Sub2titleContainer>Suporte</Sub2titleContainer>
        <Txt3Container>telefone@travesseirointeligente.com</Txt3Container>
      </div>
      
      </FeedbackPage>
      <div className="form-section">
        <FormContainer>
          <h2>Envie uma mensagem</h2>
          <form>
            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextArea id="message" name="message" rows="4" />
            </FormGroup>
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </form>
        </FormContainer>

      <Contato>
        <div class="contato">
        <h5>Contato</h5>
        <p>Entre em contato conosco para mais informações sobre o travesseiro inteligente.</p>
        </div>

        <div class="redes">
          <h5>Redes Sociais</h5>
          <p class="numero">+55 11 98765-4321</p>
          <img src={whats} class="zap" alt="zap" />
          <p class="instagram">@Deep_Sleep</p>
          <img src={insta} class="insta" alt="instagram" />
          <p class="tiktok">Deep_Sleep</p>
          <img src={ttk} class="ttk" alt="tiktok" />
          
        </div>
        

      </Contato>

      </div>
      </>
  );
};

export default Feedback;
