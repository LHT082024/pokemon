
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrainerButton from "./pokemonStuff/TrainerButton";
import App from './App.jsx'
import DragonTeam from './pokemonStuff/Team.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/Team",
      element: <DragonTeam />
    }
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
