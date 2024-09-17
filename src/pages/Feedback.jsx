import React, { useState, useEffect } from 'react';
import {
  EntContainer, SubtitleContainer, TxtContainer, Txt2Container, Sub2titleContainer, Txt3Container, 
  FormContainer, FormGroup, FormLabel, FormInput, FormTextArea, SubmitButton, 
  Contato
} from './Feedback.style'; // Ajuste o caminho se necessário

import whats from "../assets/whatsapp-logo.svg"
import insta from "../assets/instagram.svg"
import ttk from "../assets/tiktok.svg"

// Componente FeedbackPage
const FeedbackPage = ({ children }) => {
  return <div className="feedback-page">{children}</div>;
};

// Componente Feedback
const Feedback = () => {
  // Estado para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Estado para mensagens de feedback ao usuário
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Exemplo de chamada para um backend local (ajuste o URL conforme necessário)
      const response = await fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFeedbackMessage('Feedback enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário após o envio
      } else {
        setFeedbackMessage('Erro ao enviar feedback.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setFeedbackMessage('Erro ao enviar feedback.');
    }
  };

  useEffect(() => {
    document.body.classList.add('feedback');
    return () => document.body.classList.remove('feedback');
  }, []);

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
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextArea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
            {feedbackMessage && <p>{feedbackMessage}</p>}
          </form>
        </FormContainer>

        <Contato>
          <div className="contato">
            <h5>Contato</h5>
            <p>Entre em contato conosco para mais informações sobre o travesseiro inteligente.</p>
          </div>

          <div className="redes">
            <h5>Redes Sociais</h5>
            <p className="numero">+55 11 98765-4321</p>
            <img src={whats} className="zap" alt="zap" />
            <p className="instagram">@Deep_Sleep</p>
            <img src={insta} className="insta" alt="instagram" />
            <p className="tiktok">Deep_Sleep</p>
            <img src={ttk} className="ttk" alt="tiktok" />
          </div>
        </Contato>
      </div>
    </>
  );
};

export default Feedback;
