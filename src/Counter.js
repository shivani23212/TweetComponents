import React, {useState} from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter+1);
    }

    return (
        <div className="counter-container">
            <button onClick={incrementCount}>Click Me</button>
            <h2>Count: {counter} </h2>
        </div>
    );
}

export default Counter;