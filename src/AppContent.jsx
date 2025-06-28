import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default function AppContent(){
    return (
        <BrowserRouter>
         <App/>
        </BrowserRouter>
    )
}