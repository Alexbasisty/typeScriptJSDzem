import React from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bulma/css/bulma.min.css';
import App from './components/App';
import './style.css';

const root = createRoot(document.getElementById('app'));

root.render(<App />);