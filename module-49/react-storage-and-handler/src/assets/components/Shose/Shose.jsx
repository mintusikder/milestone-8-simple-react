// import React from 'react';

import { multiply } from "../Utlities/Utlities";

const Shose = () => {
    const first = 12;
    const second = 9;
    const total = multiply(first , second)
    return (
        <div>
            <h2>{total}</h2>
        </div>
    );
};

export default Shose;