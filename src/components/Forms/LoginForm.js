import {useContext } from "react";
import '../Forms/form.css';
import { UserInfo } from "../../App";
import InputField from "./InputField";
import Button from "./Button";
import Icons from "../Icons/icons";
import Methods from "../Methods/Methods";

const LoginForm = ()=>{
   
    const userInfo = useContext(UserInfo);

    const [OnChangeInput, onclick] = Methods(userInfo.dispatch);

 
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