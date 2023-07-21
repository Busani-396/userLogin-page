import { useEffect } from "react";

function useDocument(count){

    useEffect(()=>{
        console.log(count)
        document.title = `my document title ${count}`
    },[count])
}


export default useDocument