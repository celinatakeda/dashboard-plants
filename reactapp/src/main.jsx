import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import { Home } from './pages/Home';

import { On } from './pages/On';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <On />
    
  </React.StrictMode>
)
