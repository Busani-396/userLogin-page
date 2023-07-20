import { useReducer,useState, memo, useCallback, createContext, useRef } from "react";
import { studentName } from "../App";
import MiniTest from "./miniTest";

export const userData = createContext()

const userDetails = {
    name : '',
    surname : '',
    age :''
}


const reducer = (state, action)=>{
    switch(action.type){
        case 'onChangeHandle':
            console.log(state)
            return {...state, [action.field] : action.value}
            break
        case 'submit':
            console.log(state)
            return state
            break;
        default :
            console.log('nothing here nig');
            return state
    }
}



function Test(){
    console.log('component has rendered')
    const [user, dispatch] = useReducer(reducer,userDetails);
    // const [count, setCount] = useState(0);

    let person = useRef('busani b moyo');

    const onChangeInput = (e)=>{
          const {name , value } = e.target;

          return dispatch({type : 'onChangeHandle' , field : name , value})
    }

    const submitHandler = ()=>{
        person.current = user.name
        console.log('my ref object value ' + person.current)
        return dispatch({type : 'submit'})
    }

    return(
        <>
          
           <form>
             <input type="text" name = 'name' value={user.name} placeholder="name" onChange={onChangeInput}/>
             <input type="text" name='surname' value={user.surname} placeholder="surname" onChange = {onChangeInput}/>
             <input type="number" name='age' value={user.age} placeholder="age" onChange = {onChangeInput}/>

             <button type="button" onClick={()=>submitHandler()}>button</button>

           </form>

        <userData.Provider value = {user}>
            <MiniTest/>
        </userData.Provider>
        
        </>
    )
}

export default Test;