import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/global.js";
import Guia from "./pages/Guia.jsx"; // Importa o componente Guia
import Quem from "./pages/Quem.jsx";
import Referencias from "./pages/Referencias.jsx";
import { SaibaContainer } from "./pages/Home.sytes.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Guia",
    element: <Guia />,
  },

  {
    path: "/Referencias",
    element: <Referencias/>,
  },

  {
    path: "/Quem",
    element: <Quem/>,
  },

  {
    path: "/DeepSleep",
    element: <SaibaContainer/>
  }
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
