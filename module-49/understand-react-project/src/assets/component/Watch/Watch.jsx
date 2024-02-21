import React, { useEffect, useState } from 'react';
import Dile from '../Dile/Dile';

const Watch = () => {
    const [step, setStep] = useState(0)

    const increaseSteps = () =>{
        const nextSteps = step +1 
        setStep(nextSteps)
    }
    useEffect(() => {
        console.log(step)
    },[step])
    return (
        <div style={{border : " 2px solid red", margin: "10px"}}>
           <h2>This is my smart watch</h2>
           <p>Steps: {step}</p>
           <button onClick={increaseSteps}>De Dour</button>
           <Dile step={step}></Dile>
        </div>
    );
};

export default Watch;