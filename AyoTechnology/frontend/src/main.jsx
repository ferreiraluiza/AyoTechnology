import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Login from "./pages/login/login.jsx";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path="/" element = {<App/>}/>
      <Route path="/login" element = {<Login/>}/>
    </Routes>
   </Router>
  </StrictMode>,
)
