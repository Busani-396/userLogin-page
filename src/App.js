import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Card from './components/UI/Card';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh',backgroundColor:'rgba(210,210,250,.6)'}}>
    <div className='card m-auto col-lg-8 col-md-8 col-sm-12'>
      <div style={{fontSize:'1.5em',padding:'5px 10px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-amd" viewBox="0 0 16 16">
          <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
        </svg>
        &nbsp;
        Logo
      </div>
      <div className="">
          <Login/>
      </div>
      
    </div>
    </div>
  );
}

export default App;
