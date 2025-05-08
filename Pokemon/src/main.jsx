
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import DragonTeam from './pokemonStuff/Team';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <App />
    },
     {
      path: "/Team/:id",
      element: <DragonTeam/>,
    } 
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
