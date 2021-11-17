import React, {useState, useEffect} from 'react';

function Lenders() {
    const [lendersData, setLendersData] = useState([]);

    useEffect(() => {
        fetch("/lenders")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0) {
                    setLendersData(data);
                }
            })
    }, [])

    const showLenders = lendersData?.map(lender => {
        return (<div>
            <h3>{lender.name}</h3>
            <h4>{lender.interest_rate}</h4>
        </div>)
        })
        


    return (
        <div>
            {showLenders}
        </div>

    );
}

export default Lenders;