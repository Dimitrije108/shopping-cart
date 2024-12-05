import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import routes from './routes';
import { StarshipDataProvider } from './components/StarshipsDataProvider/StarshipsDataProvider';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarshipDataProvider>
      <RouterProvider router={router} />
    </StarshipDataProvider>
  </StrictMode>,
)
