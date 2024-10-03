import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from "./pages/landingPage/landing.jsx";
import Login from "./pages/login/login.jsx";
 function App() {
  return (
   <Router>
    <nav>
      <ul>
        <li><Link to = "/">Landing</Link></li>
        <li><Link to = "/Login">Login</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element = {<Landing/>}/>
      <Route path="/login" element = {<Login/>}/>
    </Routes>
   </Router>
  )
}
export default App;