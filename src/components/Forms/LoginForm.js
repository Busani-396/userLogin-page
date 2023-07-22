import { useEffect, useState, useContext } from "react";
import '../Forms/form.css';
import { UserInfo } from "../../App";
import InputField from "./InputField";
import Button from "./Button";
import Icons from "../Icons/icons";

const LoginForm = ()=>{
    const [user, setUser] = useState({username:"", password:""});
    const [isActive,setActive] = useState(true);

    const userInfo = useContext(UserInfo)

    const submitForm = ()=>{
        console.log(user)
    }

    const onchangeUsername = (e)=>{
            setUser((prevState)=>{
               return  {
                        ...prevState,username: e.target.value
                     } 
                    }
                )
    }

    const onchangePassword = (e)=>{
        setUser((prevState)=>{
            return  {
                     ...prevState,password: e.target.value
                  } 
                 }
        )
 
    }
useEffect(()=>{
    if(user.username && user.password){
        setActive(true);
    }else{
        setActive(false)
    }
})



const OnChangeInput = (e)=>{
    const {dispatch} = userInfo;
    const {name, value } = e.target;

   return dispatch({type : 'login', field : name, value});
}


const onclick = ()=>{
    console.log('clicked')
    return userInfo.dispatch({type : 'login'})
}
 

    return(
        <form>
             <div className="input-group input-group-lg mb-3">
                <span className="input-group-text" id="basic-addon1">{Icons.emailIcon}</span>
                        <InputField type= "text" name = 'username' value = {userInfo.user.username} user={userInfo} onChangeInput = {OnChangeInput}/>
                    </div>
                    <div className="input-group input-group-lg mb-3">
                        <span className="input-group-text" id="basic-addon1">{Icons.lockIcon}</span>
                        <InputField type= "password" name = 'password' value ={userInfo.user.password} onChangeInput = {OnChangeInput}/>
                    </div>
                    <div className="text-center py-4">
                        <p>Forgot your password ?</p>
                    </div>
                    <div className="text-center pb-4">
                       <Button onClick = {onclick}>
                          Sign In
                       </Button>
                    </div>

                </form>
    )
}


export default LoginForm;