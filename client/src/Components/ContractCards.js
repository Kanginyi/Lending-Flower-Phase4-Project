import React from 'react';

function ContractCard({amount, description, collateral, duration, lendee, lender, interestRate}) {
    return (
        <div>
            <h3>Lender: {lender}</h3>
            <h3>Lendee: {lendee}</h3>

            <p>Amount: ${amount}</p>
            <p>Interest Rate: {interestRate}%</p>
            <p>Duration: {duration} Days</p>

            <p>Description: {description}</p>
            <p>Collateral: {collateral}</p>
        </div>
    );
}

export default ContractCard;