import React from 'react';
import ReactDOM from 'react-dom/client';
import Myfunc1,{Myfunc2} from './About';
import Contactus from './Contactus';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import "./style.css";
import Loginpage from './modules/auth/Loginpage';
import Registorpage from './modules/auth/Registorpage';
import Landingpage from './modules/components/Landingpage';
import Mynavbar from './modules/shares/Mynavbar';
import Myaxiospage from './modules/components/Myaxiospage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='registor' element={<Registorpage/>}/>
        <Route path='landing' element={<Landingpage/>}/>
        <Route path='myaxios' element={<Myaxiospage/>}/>
      </Routes>
    
    
    </BrowserRouter>
 
  </React.StrictMode>
);

