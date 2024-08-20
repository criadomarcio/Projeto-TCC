import styled from 'styled-components';

export const EntContainer = styled.h1`
  text-align: left;
  margin-left: 4rem;
  color: #5D3FD3;
  margin-top: 10rem;
`;

export const TxtContainer = styled.p`
  text-align: left;
  margin-left: 4rem;
  margin-right: 70rem;
  color: #6699CC;
  margin-top: 2rem;
`;

export const SubtitleContainer = styled.h2`
  margin-top: 2rem;
  margin-left: 4rem;
  color: #5D3FD3;
  text-align: left;
`;

export const Txt2Container = styled.p`
  font-size: 1.1rem;
  margin-left: 4rem;
  color: #6699CC;
  text-align: left;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

export const Sub2titleContainer = styled.h3`
  margin-top: 1.5rem;
  margin-left: 4rem;
  color: #5D3FD3;
  text-align: left;
`;

export const Txt3Container = styled.p`
  font-size: 1.1rem;
  margin-left: 4rem;
  color: #6699CC;
  text-align: left;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

export const FormContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  padding: 1rem;
  border: 2px solid #5D3FD3;
  border-radius: 8px;
  background-color: #E6E6FA;
  margin-left: 70rem;
  margin-top: -20rem;


  h2 {
    text-align: center;
    color: #5D3FD3;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  color: #5D3FD3;
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #5D3FD3;
  border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #5D3FD3;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #5D3FD3;
  color: #FFFFFF;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
  border: 1px solid #5D3FD3;

  &:hover {
    background-color: #FFFFFF;
    color: #5D3FD3; 
  }
`;


export const FeedbackContainer = styled.div`
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .info-section {
    flex: 2;
    margin-right: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-section {
    flex: 1; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
  .info-section, .form-section {
    flex: 1 1 100%; 
    margin-right: 0;
  }
  
  .feedback-page {
    flex-direction: column;
  }
}

`;

export const Contato = styled.div`
  background: ${props => props.theme.header};
  margin-top: 6rem;
  padding: 5rem;

  .contato h5 {
    margin-top: -3rem;  
    color: ${props => props.theme.textColorVerde};
  }

  .contato p {
    margin-right: 85rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: ${props => props.theme.textColorLaranja};
  }

  .redes {
  position: relative; /* Torna o contêiner relativo para posicionar os textos */
  margin-left: 40rem;
  margin-top: -7rem;
  color: ${props => props.theme.textColorVerde};
}

.redes img {
  display: block;
  margin-top: 0.5rem;
  position: relative; 
}

.numero, .instagram, .tiktok {
  position: absolute;
  left: 0;
  top: 50%; 
  transform: translateY(-50%); 
  margin-left: 1rem; 
}

.numero {
  font-size: 1.2rem;
  margin-left: 3rem;
  margin-top: -1.5rem;
  color: ${props => props.theme.textColorLaranja};
}

.instagram {
  font-size: 1.2rem;
  margin-left: 3rem;
  margin-top: 1rem;
  color: ${props => props.theme.textColorLaranja};
}

.tiktok {
  font-size: 1.2rem;
  margin-left: 3rem;
  margin-top: 3.5rem;
  color: ${props => props.theme.textColorLaranja};
}
`;
