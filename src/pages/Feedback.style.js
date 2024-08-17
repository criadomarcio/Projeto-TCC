import styled from 'styled-components';

export const EntContainer = styled.h1`
  text-align: left;
  color: #5D3FD3;
  margin-top: 2rem;
`;

export const TxtContainer = styled.p`
  text-align: left;
  margin: 1rem 0;
  color: #6699CC;
`;

export const SubtitleContainer = styled.h2`
  margin-top: 2rem;
  color: #5D3FD3;
  text-align: left;
`;

export const Txt2Container = styled.p`
  font-size: 1.1rem;
  color: #6699CC;
  text-align: left;
`;

export const Sub2titleContainer = styled.h3`
  margin-top: 1.5rem;
  color: #5D3FD3;
  text-align: left;
`;

export const Txt3Container = styled.p`
  font-size: 1.1rem;
  color: #6699CC;
  text-align: left;
`;

export const FormContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  padding: 1rem;
  border: 2px solid #5D3FD3;
  border-radius: 8px;
  background-color: #E6E6FA;

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

