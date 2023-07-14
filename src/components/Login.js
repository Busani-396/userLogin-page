import LoginForm from "./Forms/LoginForm";
import SocialLogo from "./Social/SocialLogo";
import Card from "./UI/Card";


const inputStyle={
        border : '1px solid rgba(255,255,255,.4);'
}

function Login(){

   
    return (
        <Card title="Sign in to account" className="">
            
            <div className="my-4 col-lg-4 d-flex justify-content-around align-items-center">
                <SocialLogo logo={'f'}/>
                <SocialLogo logo={'g+'}/>
                <SocialLogo logo={'ln'}/>
            </div>
            <div>
                <p className="py-2">Or use your email account</p>
            </div>
            <div>
            <LoginForm/>
            </div>
        </Card>
    )
}

export default Login;