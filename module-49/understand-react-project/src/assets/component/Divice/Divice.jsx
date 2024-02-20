import React from 'react';

const Divice = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I have a divice {props.name}</h3>
        </div>
    );
};

export default Divice;