const size={
    height : '40px',
    width : '40px'
}

function SocialLogo({logo}){
    return(
        <div className="d-flex justify-content-center align-items-center rounded-circle border" style={size}>
                <strong>{logo}</strong>  
        </div>
    )
}


export default SocialLogo;