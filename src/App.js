import React from 'react';
import NavClient from "./components/NavClient";
import Footer from "./components/Footer"
import Home from './components/Home';
import Jobposted from "./components/Jobposted"
import Clientprofile from "./components/Clientprofile";
import Develope from "./components/Developer"
import Chatting from './components/Chatting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import"./App.css";
function App() {
  return (
    <Router>
      <NavClient/>
      <Routes>
         <Route path="/jobposted" element={<Jobposted />} /> 
         <Route path="/clientprofile" element={<Clientprofile />} />
         <Route path="/developer" element={<Develope />} />
         <Route path="/chatting" element={<Chatting />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
