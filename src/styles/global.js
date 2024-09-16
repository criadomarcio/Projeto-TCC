import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 62.5%;
    }

    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;1,14..32,300&display=swap');

    body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        font-size: 1.6rem;
        background: ${props => props.theme.pagesBackground};
    }

    .home-background {
        background: ${props => props.theme.homeBackground};
    }
`;


