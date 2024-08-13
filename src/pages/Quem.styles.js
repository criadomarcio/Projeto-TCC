import styled from 'styled-components';

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

export const HumContainer1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 10%;
  color: #5D3FD3;
  font-size: 4.5rem;
  margin: 15%;
`;

export const ImgKayke = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21.9%;
  height: 270px;
  border-radius: 50%;
`;

export const KaykeContainer = styled.h2`
  display: flex;
  justify-content: center;
  padding: 0.1em 0.5rem;
  color: #F08080;
  font-size: 1.4rem;
  margin: 21.9%;
`;

export const Fun1Container = styled.p`
  padding: 0.1em 0.5em 3rem;
  color: #6699CC;
  font-size: 1rem;
  margin: 21.9%;
`;

export const ImgRenan = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21.9%;
  height: 270px;
  border-radius: 50%;
`;

export const RenanContainer = styled.h2`
  display: flex;
  justify-content: center;
  padding: 0.1em 0.5rem;
  color: #F08080;
  font-size: 1.4rem;
  margin: 21.9%;
`;

export const Fun2Container = styled.p`
  padding: 0.1em 0.5em 3rem;
  color: #6699CC;
  font-size: 1rem;
  margin: 21.9%;
`;

export const ImgRafael = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21.9%;
  height: 270px;
  border-radius: 50%;
`;

export const RafaelContainer = styled.h2`
  display: flex;
  justify-content: center;
  padding: 0.1em 0.5rem;
  color: #F08080;
  font-size: 1.4rem;
  margin: 21.9%;
`;

export const Fun3Container = styled.p`
  padding: 0.1em 0.5em 3rem;
  color: #6699CC;
  font-size: 1rem;
  margin: 21.9%;
`;

export const CenterContainer = styled.div`
        display: flex;
        justify-content: center ;
        align-items: center;
        margin: 21,9%;
`