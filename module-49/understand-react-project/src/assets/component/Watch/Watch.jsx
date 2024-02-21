import React, { useEffect, useState } from 'react';

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
        <div>
           <h2>This is my smart watch</h2>
           <p>Steps: {step}</p>
           <button onClick={increaseSteps}>De Dour</button>
        </div>
    );
};

export default Watch;