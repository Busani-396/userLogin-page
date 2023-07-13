const Card = (props)=>{
    const card_parent = props.className + 'col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center';
    
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