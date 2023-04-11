import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import BookSiteMainComp from './components/bookSiteMainComp';
import NewsSiteMainComp from './components/newsSiteMainComp';
import CompMainComp from './components/compMainComp';
import RlifeCycle from './components/rlifecycle';
import MainCompPerson from './components/mainCompPerson';
import StudentMainComp from './components/studentMainComp';
import BookAppMain from './components/bookAppMain';
import CustomerMain from './components/customersMain';
import CarMainComp from './components/carMainComp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CarMainComp/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
