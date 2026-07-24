import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './tailwind.css';
import NavBar from './components/NavBar';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);