const BothPlan = ({meta_data}) => {
    console.log(meta_data)

    let total = 0;
    
    meta_data.forEach(plan => {
        total += plan.price
    });

    return ( 
        <div className="current-plan">
            <h3>Current Plan</h3>
            <ul>
                {meta_data.map((plan) => (
                    <li>{plan.name} <span> ${plan.price}</span></li>
                ))}
            </ul>
            <div className="current-total">
                <h4>Total: ${total}</h4>
            </div>
        </div>
     );
}
 
export default BothPlan;