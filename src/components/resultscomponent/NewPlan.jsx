import './../../styles/NewPlan.css'

const NewPlan = ({meta_data}) => {

    let total = 0;
    
    meta_data.forEach(plan => {
        total += plan.price
    });

    return ( 
        <div className="new-plan">
            <h3>Current Plan</h3>
            <ul>
                {meta_data.map((plan) => (
                    <li>{plan.name} <span> ${plan.price}</span></li>
                ))}
            </ul>
            <div className="new-total">
                <h4>Total: ${total}</h4>
            </div>
        </div>
     );
}
 
export default NewPlan;