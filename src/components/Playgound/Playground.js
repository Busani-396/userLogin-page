import { useReducer } from "react";
import MyButton from "./MyButton";



const initialState = {
       age : 0
}

function reducer(state, action){
    console.log(state)

      switch(action.type){
        case 'increment':
            return {age : state.age + 1}
           // break
        case 'decrement':
            return {age : state.age - 1}

        case 'reset':
            return {age : 0}

            
      }
}

function Playground(){

    const [counter, dispatch] = useReducer(reducer, initialState);

    function Increment(){
        return dispatch({type : 'increment'})
    }

    function Decrement(){
        return dispatch({type : 'decrement'})
    }

    function Reset(){
        return dispatch({type : 'reset'})
    }

    return (
        <div>
            <h1>The current count age value {counter.age}</h1>

            <MyButton onClick={Increment}>
                Increment
            </MyButton>

            <MyButton onClick={Decrement}>
                Decrement
            </MyButton>

            <MyButton onClick={Reset}>
                Reset
            </MyButton>
        </div>
    )
}

export default Playground;