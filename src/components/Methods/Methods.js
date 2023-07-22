
function Methods({userInfo}){

    const OnChangeInput = (e)=>{
        const {dispatch} = userInfo;
        const {name, value } = e.target;

        return dispatch({type : 'login', field : name, value});
    }


    const onclick = ()=>{
        console.log('clicked')
        return userInfo.dispatch({type : 'login'})
    }

    return [OnChangeInput , onclick]
}

export default Methods;