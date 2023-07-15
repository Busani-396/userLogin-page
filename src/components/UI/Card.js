const Card = (props)=>{
    const card_parent = props.className + 'm-auto col-lg-8 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center';
    
    return(
        <div className={card_parent}>
            <div className={props.title}>
                <h1>{props.title}</h1>
            </div>
           {props.children}
        </div>
    )
}


export default Card;