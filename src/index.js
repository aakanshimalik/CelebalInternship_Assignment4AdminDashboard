import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AppContent from './AppContent'
import {ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
      <AppContent />
    </ContextProvider>,
    document.getElementById('root')
);

  