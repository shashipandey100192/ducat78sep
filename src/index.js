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
import Detailspage from './modules/components/Detailspage';
import Curstomvalidtion from './modules/auth/Curstomvalidtion';
import Myservicepage from './modules/servicecomponent/Myservicepage';
import Mymobile from './modules/servicecomponent/Mymobile';
import Myleptop from './modules/servicecomponent/Myleptop';
import Mycomputer from './modules/servicecomponent/Mycomputer';
import Errorpage from './modules/shares/Errorpage';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { Mystore } from './modules/reduxpro/Mystore';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Mystore}>
    <Auth0Provider 
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="3MJibpBvpZfphdgq4lqHaI2klTxjsSq8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='registor' element={<Registorpage/>}/>
        <Route path='mycustomform' element={<Curstomvalidtion/>}/>
        <Route path='landing' element={<Landingpage/>}/>
        <Route path='myaxios' element={<Myaxiospage/>}/>
        <Route path='myaxios/details/:id' element={<Detailspage/>}/>
        <Route path='myservice' element={<Myservicepage/>}>
            <Route path='mobile' element={<Mymobile/>}/>
            <Route path='leptop' element={<Myleptop/>}/>
            <Route path='computer' element={<Mycomputer/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Route>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    
    
    </BrowserRouter>
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

