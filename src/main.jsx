import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import JRank from './JRank.jsx';
import WannaBeResearcher from "./components/design/wanna_be_researcher.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/journal-ranking',
    element: <JRank />,
  },    {
    path: "/wannabe-a-researcher",
    element: <WannaBeResearcher />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
