import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
   </Routes>
  </BrowserRouter>
)
