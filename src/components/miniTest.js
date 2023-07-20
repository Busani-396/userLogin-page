import { useContext } from "react";
import { userData } from "./Test";



function MiniTest(){
    const user = useContext(userData);

    return (
        <>
            <h4>Hello i am mini test</h4>
            <p>I present to you - {user.name}</p>
        </>
    )
}


export default MiniTest;