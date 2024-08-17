import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.header};
  padding: 10px 20px;
`;

export const LogoContainer = styled.div`
  img {
    width: 120px;
    height: auto;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 50px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: ${props => props.theme.textColorLaranja};
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
    margin: 0;
  }

  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }
`;

export const MaisContainer = styled.h1`
  color: ${props => props.theme.header};
  margin-top: 4rem;
  margin-left: 3rem;
  font-size: 5rem;
`;

export const TextContainer = styled.p`
  color: ${props => props.theme.header};
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-right: 73.2rem;
  font-size: 1.8rem;
`;

  export const NumerosContainer = styled.div`  
  color: ${props => props.theme.textColorLaranja};
  display: flex;
  gap: 5rem;
  margin-left: 46rem;
  margin-top: -5rem;

  .numero-texto {
    display: flex;
    flex-direction: column;
    align-items: left;
    
    div {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ImagemContainer = styled.div`
  img {
    width: 60rem;
    height: 22.5rem;
    margin-left: 7rem; 
    border-radius: 2rem;
    margin-top: 7rem;
  }
`;






  export const Tecnologia = styled.h1`
    color: ${props => props.theme.header};
    text-align: center;
    margin-top: 15rem;
  `;

  export const Subtitulo = styled.p`
    color: ${props => props.theme.textColorLaranja};
    margin-top: 2rem;
    margin-left: 39rem;
    margin-right: 39rem;
    text-align: center;
  `;

  export const Imagem1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-left: 10rem;
  width: fit-content;
  height: auto;
  gap: 20rem;

  img {
    width: 20rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  
  img:nth-of-type(2) {
    width: 20rem; 
    height: 18rem; 
    border-radius: 1.5rem;
  }
  `;

  export const TextH1 = styled.h5`
    color: ${props => props.theme.textColorLaranja};
    margin-left: 10rem;
    margin-top: 1.5rem;

  `;

  export const TextTec1 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-top: 1rem;
    margin-left: 10rem;
    margin-right: 89.3rem;
    font-size: 1.3rem;
  `;

  export const TextH2 = styled.h5`
    color: ${props => props.theme.textColorLaranja};
    margin-left: 50rem;
    margin-top: -15.7rem;
    
  `;

  export const TextTec2 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-left: 50rem;
    margin-right: 48rem;
    font-size: 1.3rem;
    margin-top: 0.7rem;
  `;

  export const TextH3 = styled.h5`
    color: ${props => props.theme.textColorLaranja};
    margin-left: 90rem;
    margin-right: 5rem;
    margin-top: -15.5rem;
  `;

  export const TextTec3 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-top: 0.7rem;
    margin-left: 90rem;
    font-size: 1.3rem;
    margin-right: 5rem;
  `;





  
  export const Publico = styled.h1`
    color: ${props => props.theme.header};
    text-align: center;
    margin-top: 15rem;
  `;

  export const Subtitulo1 = styled.p`
    color: ${props => props.theme.textColorLaranja};
    text-align: center;
    margin-top: 2rem;
    margin-left: 33rem;
    margin-right: 33rem;
  `;

  export const ImagemP1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-left: 10rem;
  width: fit-content;
  height: auto;
  gap: 20rem;
  

    img {
      width: 20rem;
      height: 18rem;
      object-fit: cover;
      border-radius: 1.5rem;
    }


    img:nth-of-type(2) {
      width: 20rem; 
      height: 18rem; 
      border-radius: 1.5rem;
    }
  `;

  export const TextPub1 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-top: 1rem;
    margin-left: 10rem;
    margin-right: 89.3rem;
    font-size: 1.3rem;
  `;

  export const TextPub2 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-left: 50rem;
    margin-right: 48rem;
    font-size: 1.3rem;
    margin-top: -3.2rem;
  `;

  export const TextPub3 = styled.p`
    color: ${props => props.theme.textColorAzul};
    margin-top: -4rem;
    margin-left: 90rem;
    font-size: 1.3rem;
    margin-right: 5rem;
  `;


export const Objetivo = styled.h1`
  color: ${props => props.theme.header}; 
  text-align: center;
  margin-top: 10rem;
  width: 100%;
`;

export const TextoH1 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;
`;

export const TextOb1 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 20rem;
  line-height: 1.2;
  margin-top: 0.5rem;
`;

export const TextoH2 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  margin-top: 5rem;
`;

export const TextOb2 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 70rem;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 0.5rem;
`;

export const TextoH3 = styled.h4`
  color: ${props => props.theme.textColorLaranja};
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;
`;

export const TextOb3 = styled.p`
  color: ${props => props.theme.textColorAzul};
  font-size: 1.5rem;
  margin-bottom: 10px;
  max-width: 500px;
  line-height: 1.2;
  margin-left: 20rem;
  margin-top: 0.5rem;
`;

