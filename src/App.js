import logo from './logo.svg';
import './App.css';
import {useState, useEffect, createContext, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Card from './components/UI/Card';
import RegForm from './components/Forms/RegForm';
import Registration from './components/Registration';
import Test from './components/Test';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export const UserInfo = createContext();


const initialDetails = {
  username : 'name',
  surname : 'surname',
  email : '',
  password : '',
  loginNow : false
}

const reducer = (state, action)=>{
          switch(action.type){
            case 'registration':
              return {...state, [action.field] : action.value}
              break
            case 'login':
              console.log(state)
              return {...state, [action.field] : action.value }
              break
            case 'toggle':
              return {...state, loginNow : !state.loginNow}
            default :
               console.log('no action taken')
              return state
          }
}

function App() {
  const [user, dispatch] = useReducer(reducer, initialDetails);
  const [loginNow, setLoginNow] = useState(true);


  const toggleForms = ()=>{
    //return setLoginNow(!loginNow)
    return dispatch({type : 'toggle'})
  }

  const initialState = 0;

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh',backgroundColor:'rgba(210,210,210,.6)'}}>
    <div className='card m-auto col-lg-6 col-md-6 col-sm-12'>
      <div className="d-flex justify-content-between align-items-center" style={{fontSize:'1.5em',padding:'5px 10px'}}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-amd" viewBox="0 0 16 16">
          <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
        </svg>
        &nbsp;
        Logo {user.loginNow }
        </div>
        <div class="col-lg-4">
             <div>
                <button onClick ={toggleForms}>toggle</button>
             </div>
          </div>
      </div>
      <div className="row">
          {/* {loginNow ? <Login/> : <Registration/>} */}

          <UserInfo.Provider value = { {user : user, dispatch : dispatch , isTrue : user.loginNow}}>
              {user.loginNow ? <Login/> : <Registration/> }
          </UserInfo.Provider>
          
      </div>
      
    </div>
    {/* <studentName.Provider value ='Busani Dabengwa Moyo'>
        <Test initialState={initialState}/>
    </studentName.Provider> */}
    
    </div>
  );
}

export default App;
