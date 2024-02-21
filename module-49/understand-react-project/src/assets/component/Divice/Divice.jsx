import React from 'react';
import DivesDetails from '../DivesDetails/DivesDetails';

const Divice = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I have a divice {props.name}</h3>
            <DivesDetails price={props.price} />
        </div>
    );
};

export default Divice;