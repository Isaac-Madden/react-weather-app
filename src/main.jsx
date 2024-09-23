import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundProvider } from './Contexts/BackgroundHandle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BackgroundProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BackgroundProvider>
)
