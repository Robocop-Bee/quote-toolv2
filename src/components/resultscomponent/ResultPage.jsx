import './../../styles/ResultPage.css'
import CurrentPlan from './CurrentPlan';
import NewPlan from './NewPlan';
import {useSelector} from 'react-redux'
import BothPlan from './BothPlan';
import {useState} from 'react'

const ResultPage = () => {

    const inputs = useSelector(state => state.input)
    console.log(inputs)
    

    return ( 
        <div className="result-container">
            <h2 className="results">Here is your quote</h2>
            <CurrentPlan meta_data={inputs.currentPlan}/>
            <NewPlan meta_data={inputs.newPlan}/>
        </div>
     );
}
 
export default ResultPage;