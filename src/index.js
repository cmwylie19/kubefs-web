import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import { Header } from './Header';
import Images from './Images';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer 
    header={<Header/>}
    images={<Images/>}
    />
  </React.StrictMode>
);

