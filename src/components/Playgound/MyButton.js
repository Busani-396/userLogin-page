function MyButton({children, onClick}){
    return (
        <button type ="button" onClick = {onClick}>
            {children}
        </button>
    )
}

export default MyButton;