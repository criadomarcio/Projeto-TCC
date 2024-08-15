import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.header};
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
    display: flex;
    gap: 20px;
  }

  li {
    margin: 0;
  }

  a {
    color: ${props => props.theme.textColorLaranja};
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
  }

  a:hover {
    color: ${props => props.theme.textColorLaranjaHover};
  }

  @media (max-width: 768px) {
    gap: 20px;
    ul {
      flex-direction: column;
      gap: 10px;
    }
  }
`;


export const HumContainer1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 10%;
  color: #5D3FD3;
  font-size: 4.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 5% 5%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 150px; 
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  max-width: 300px; 
`;

export const ImgKayke = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const KaykeContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;
`;

export const Fun1Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export const ImgRenan = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const RenanContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;
`;

export const Fun2Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export const ImgRafael = styled.img`
  height: 270px;
  width: 270px; 
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const RafaelContainer = styled.h2`
  color: #F08080;
  font-size: 1.4rem;
  margin: 0;
`;

export const Fun3Container = styled.p`
  color: #6699CC;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 5px; 
`;


export const HumContainer2 = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #5D3FD3;
  padding: 6% 6%;
`;

