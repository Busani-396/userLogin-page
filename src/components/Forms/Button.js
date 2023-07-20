function Button({children, onClick, isTrue}){
    return <button
             type='button'
            className={`form-btn rounded-pill ${isTrue ? '' : 'disabled'}`}
             onClick={onClick}
             >
              {children}
           </button>
}


export default Button;