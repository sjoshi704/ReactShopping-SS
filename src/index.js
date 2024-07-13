import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import NetflixIndexComponent from './Components/NetflixIndexComponent';
import DataBinding from './Components/DataBinding';
import { DataBindingJsonData } from './Components/DataBindingJSONData';
import { ApiDataFetched } from './Components/APIDataFetched';
import { TwoWayEventBindingComponent } from './Components/TwoWayEventBindingComponent';
import { FormTwoWayEventBinding } from './Components/FormTwoWayEventBinding';
import {ShoppingComponent} from './Components/ShoppingComponent';
import FormComponent from './FormHandling/FormComponent';
import { FormikDemo } from './FormHandling/FormikDemo';
import { FormikValidations } from './FormHandling/FormikValidations';
import { FormikYUPValidations } from './FormHandling/YUPValidations/FormikYUPValidations';
import YUPFormikComponent from './FormHandling/YUPValidations/YUPFormikComponent';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <NetflixIndexComponent> </NetflixIndexComponent>/ */}

  {/* <DataBinding></DataBinding> */}
  
  {/* <DataBindingJsonData> </DataBindingJsonData> */}
  
  {/* <ApiDataFetched> </ApiDataFetched> */}

   {/* <ShoppingComponent> </ShoppingComponent> */}

 {/* <TwoWayEventBindingComponent> </TwoWayEventBindingComponent> */}

 {/* <FormTwoWayEventBinding> </FormTwoWayEventBinding> */}

 {/* <FormComponent>  </FormComponent> */}

{/* <FormikDemo>  </FormikDemo> */}

{/* <FormikValidations> </FormikValidations> */}
 
 {/* <FormikYUPValidations>   </FormikYUPValidations> */}
 
 <YUPFormikComponent></YUPFormikComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
