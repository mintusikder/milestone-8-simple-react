// import React from 'react';

import { add } from "../Utlities/Utlities";



const Cosmetices = () => {
    const first = 55;
    const second = 66;
    const total = add(first , second)
    return (
        <div>
            <h2>{total}</h2>
        </div>
    );
};

export default Cosmetices;