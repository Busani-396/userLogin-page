const Card = (props)=>{
    const card_parent = props.className + 'm-auto col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center';
    
    return(
        <div className={card_parent}>
            <div className={`col-lg-12 col-md-12 col-sm-12 mt-4 pt-2 text-center ${props.title}`}>
                <h3>{props.title}</h3>
            </div>
           {props.children}
        </div>
    )
}


export default Card;