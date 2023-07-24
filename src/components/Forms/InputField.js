function InputField({type, value,name, onChangeInput}){
   
    return <input type={type}
    value ={value}
    name={name}
    className="form-control"  
    placeholder={name}
    aria-label={type}
    aria-describedby="basic-addon1"
    onChange = {onChangeInput}
    />
}


export default InputField;