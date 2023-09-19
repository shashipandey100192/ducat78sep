import React from 'react';
import ReactDOM from 'react-dom/client';
import Myfunc1,{Myfunc2} from './About';
import Contactus from './Contactus';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myreactbootstrap from './Myreactbootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myfunc1/>
    <Myfunc2/>
    <Contactus/>
    <Myreactbootstrap/>
  </React.StrictMode>
);

