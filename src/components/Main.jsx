import InputComponent from "./InputContainer";
import { useState } from "react";
import addIcon from "./../styles/assets/plus-solid.svg"
import './../styles/Main.css'

let id = 0;
const getId = () => id++;

function Main() {

    const [newInput, setInput] = useState([]);
    const [currentInput, setCurrentInput] = useState([]);

    // Adds new Element to array
    const handleCurrentClick = () => {
        setCurrentInput(prevValues => [...prevValues, getId()]);
    };

    const handleNewClick = () => {
        setInput(prevValues => [...prevValues, getId()]);
    };

    // Handle Removal of specific array by using key
    const handleCurrentRemoval = (removedId) => () => {
        setCurrentInput(ids => ids.filter(id => id !== removedId));
    };

    const handleNewRemoval = (removedId) => () => {
        setInput(ids => ids.filter(id => id !== removedId));
    };


    return (
        <div className="main-container">
            <div className="quote-container">

                <div className="current-plan">
                    <h2>Current-Plan</h2>
                    {currentInput.map((id) => (
                        <InputComponent key={id} remove={handleCurrentRemoval(id)} />
                    ))}
                    <div className="button-container">
                        <button className="add-input" onClick={handleCurrentClick}><img src={addIcon} alt="add" /></button>
                    </div>

                </div>

                <div className="new-plan">
                    <h2>New-Plan</h2>
                    {newInput.map((id) => {
                        return <InputComponent key={id} remove={handleNewRemoval(id)} />;
                    })}

                    <div className="button-container">
                        <button className="add-input" onClick={handleNewClick}><img src={addIcon} alt="add" /></button>
                    </div>
                </div>

                <button className="quote">Generate Quote</button>
            </div>
            

            
        </div>
    );
};
 
export default Main;