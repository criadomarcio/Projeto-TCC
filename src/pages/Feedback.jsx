import React from 'react';
import {
  EntContainer, SubtitleContainer, TxtContainer, Txt2Container, Sub2titleContainer, Txt3Container, 
  FormContainer, FormGroup, FormLabel, FormInput, FormTextArea, SubmitButton 
} from './Feedback.style'; // Ajuste o caminho se necessário

const FeedbackPage = ({ children }) => {
  return <div className="feedback-page">{children}</div>;
};

const Feedback = () => {
  return (
    <FeedbackPage>
      <div className="info-section">
        <EntContainer>Entre em contato conosco</EntContainer>
        <TxtContainer>Estamos ansiosos para ouvir de você. Entre em contato para mais informações sobre o travesseiro inteligente e como ele pode melhorar sua qualidade de sono.</TxtContainer>
        <SubtitleContainer>Informações</SubtitleContainer>
        <Txt2Container>contato@travesseirointeligente.com</Txt2Container>
        <Sub2titleContainer>Suporte</Sub2titleContainer>
        <Txt3Container>telefone@travesseirointeligente.com</Txt3Container>
      </div>
      
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
      </div>
    </FeedbackPage>
  );
};

export default Feedback;
