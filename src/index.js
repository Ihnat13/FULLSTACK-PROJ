import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';



const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root)
rootContainer.render(
    <HashRouter>
        <App />
    </HashRouter> 
);
