import './../../styles/Input.css'
import minusIcon from "./../../styles/assets/minus-solid.svg"


const InputComponent = (props) => {

      console.log(props)
    return ( 
        <div className="input-container" onClick={e => console.log(e)}>
            <input className="input-name" type="text"
             onChange={(e) => props.handleText(props.identity, e.target.value)}
             />
            <input className="input-value" type="number" 
            onChange={(e) => props.handleValue(props.identity, e.target.value)}/>
            <button className="remove-button" onClick={props.remove}><img src={minusIcon} alt="remove-icon" /></button>
        </div>
     );
}
 
export default InputComponent;