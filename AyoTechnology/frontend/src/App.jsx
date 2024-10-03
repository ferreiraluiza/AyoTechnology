import "./App.css";
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Landing from "./pages/landingPage/landing.jsx";
import Login from "./pages/login/login.jsx";
 function App() {
  return (
   <Router>
    <Routes>
      <Route path="/landing" element = {<Landing/>}/>
      <Route path="/login" element = {<Login/>}/>
    </Routes>
   </Router>
  )
}
export default App;