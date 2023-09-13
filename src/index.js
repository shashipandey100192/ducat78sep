import React from 'react';
import ReactDOM from 'react-dom/client';
import Myfunc1,{Myfunc2} from './About';
import Contactus from './Contactus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myfunc1/>
    <Myfunc2/>
    <Contactus/>
  </React.StrictMode>
);

