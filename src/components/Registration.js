import RegForm from "./Forms/RegForm";
import SocialLogo from "./Social/SocialLogo";
import Card from "./UI/Card";


const inputStyle={
        border : '1px solid rgba(255,255,255,.4);'
}

function Registration(){

   
    return (
        <Card title="Register your details" className="">
            
            <div className="my-4 col-lg-4 d-flex justify-content-around align-items-center">
                <SocialLogo logo={'f'}/>
                <SocialLogo logo={'g+'}/>
                <SocialLogo logo={'ln'}/>
            </div>
            <div>
                <p className="py-2">Or use your email account</p>
            </div>
            <div>
            <RegForm/>
            </div>
        </Card>
    )
}

export default Registration;