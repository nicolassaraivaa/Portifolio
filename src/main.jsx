import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home'
import App from './App.jsx'
import GlobalStyle from './Styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App/>
  </StrictMode>,
)
