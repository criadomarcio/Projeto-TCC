import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/global.js";
import Guia from "./pages/Guia.jsx"; // Importa o componente Guia
import Quem from "./pages/Quem.jsx";
import Referencias from "./pages/Referencias.jsx";
import DeepSleep from "./pages/DeepSleep.jsx";
import Feedback from "./pages/Feedback.jsx";


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
    element: <DeepSleep/>,
  },

  {
    path: "/Feedback",
    element: <Feedback/>
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