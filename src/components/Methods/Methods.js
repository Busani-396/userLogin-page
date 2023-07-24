import { useContext } from "react";
import { UserInfo } from "../../App";

function Methods(dispatch){

    const userInfo = useContext(UserInfo);
    
    const OnChangeInput = (e)=>{
        const {name, value } = e.target;
        return dispatch({type : 'login', field : name, value});
    }


    const onclick = ()=>{
        return dispatch({type : 'regi'})
    }

    return [OnChangeInput , onclick]
}

export default Methods;