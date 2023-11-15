import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NavbarContextProvider } from './context/NavbarContext/NavbarContext';
import { ContentCategoryContextProvider } from './context/ContentCategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavbarContextProvider>
      <ContentCategoryContextProvider>

        <App />
      </ContentCategoryContextProvider>
    </NavbarContextProvider>
  </BrowserRouter>
);


