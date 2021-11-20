import './../styles/Input.css'
import minusIcon from "./../styles/assets/minus-solid.svg"


const InputComponent = ({remove}) => {

    

    return ( 
        <div className="input-container">
            <input className="input-name" type="text" />
            <input className="input-value" type="text" />
            <button className="remove-button" onClick={remove}><img src={minusIcon} alt="remove-icon" /></button>
        </div>
     );
}
 
export default InputComponent;