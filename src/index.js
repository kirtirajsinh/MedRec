import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home"
import AuthProvider from "./authContext.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<React.StrictMode>
    <App />
  </React.StrictMode>}> </Route>  
  <Route path="home" element ={<Home/>}></Route>
     </Routes>
  </BrowserRouter>
  </AuthProvider>
  
  
);

