import React from 'react';
import ReactDOM from 'react-dom/client';

import { MetronomeProvider } from './context/Metronome.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetronomeProvider>
      <App />
    </MetronomeProvider>
  </React.StrictMode>,
);
