import InputComponent from "./InputContainer";
import { useState } from "react";
// import { useSelector } from "react-redux";
import {v4 as uuidv4} from 'uuid'
import addIcon from "./../../styles/assets/plus-solid.svg"
import './../../styles/InputPage.css'

function InputPage() {
    
    const [newInput, setNewInput] = useState([]);
    const [current, setCurrentInput] = useState([]);

    // Handles Adding Input
    const handleNewClick = (addInput) => {
        setNewInput(previousValue => previousValue.concat(addInput))
    };

    const handleCurrentClick = (addInput) => {
        setCurrentInput(previousValue => previousValue.concat(addInput))
    };
    const addInput = {
            text:'',
            value:0,
            key:uuidv4()
    };

    // Handles Removing Input
    const removeCurrentInput = (key) => {
        const filtered = current.filter(e => e.key !== key)
        setCurrentInput(filtered)
    };

    const removeNewInput = (key) => {
        const filtered = newInput.filter(e => e.key !== key)
        setNewInput(filtered)
    };
    

    // Record Change

    const handleNewChange = (key, value) => {
        const editedArray = newInput;

        const indexOfObject = editedArray.findIndex(e => e.key === key)

        editedArray[indexOfObject].text = value

        setNewInput(editedArray);

    };

    const handleNewChangeValue = (key, value) => {
        const editedArray = newInput;

        const indexOfObject = editedArray.findIndex(e => e.key === key)

        editedArray[indexOfObject].value = value

        setNewInput(editedArray);

    };

    const handleCurrentChange = (key, value) => {
        const editedArray = current;

        const indexOfObject = editedArray.findIndex(e => e.key === key)

        editedArray[indexOfObject].text = value

        setCurrentInput(editedArray);

    };

    const handleCurrentChangeValue = (key, value) => {
        const editedArray = current;

        const indexOfObject = editedArray.findIndex(e => e.key === key)

        editedArray[indexOfObject].value = value

        setCurrentInput(editedArray);
        console.log(newInput, current)
    };

    console.log(newInput, current)
    return (
        <div className="main-container">
            <div className="quote-container">

                <div className="current-plan">
                    <h2>Current-Plan</h2>
                    {
                        current.map(e => (
                            <InputComponent key={e.key} 
                            remove={()=>removeCurrentInput(e.key, current)}
                            handleText={handleCurrentChange}
                            identity={e.key}
                            handleValue = {handleCurrentChangeValue}
                            />
                        ))
                    }
                    <div className="button-container">
                        <button className="add-input" onClick={() =>handleCurrentClick(addInput)}><img src={addIcon} alt="add" /></button>
                    </div>

                </div>

                <div className="new-plan">
                    <h2>New-Plan</h2>
                    {
                        newInput.map(e => (
                            <InputComponent key={e.key} 
                            remove={()=>removeNewInput(e.key, newInput)}
                            handleText={handleNewChange}
                            identity={e.key}
                            handleValue={handleNewChangeValue}
                            />
                        ))
                    }

                    <div className="button-container">
                        <button className="add-input" onClick={() => handleNewClick(addInput)}><img src={addIcon} alt="add" /></button>
                    </div>
                </div>

                <button className="quote">Generate Quote</button>
            </div>
            

            
        </div>
    );
};
 
export default InputPage;