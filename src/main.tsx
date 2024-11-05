
import './index.css'
import App from './App.tsx'
import './theme.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterProvider from './CounterContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </React.StrictMode>
);
