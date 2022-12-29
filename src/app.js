import {React, useState} from "react";
import "./app.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrClick = () => {
        setCounter(counter + 1);
    }
    const decrClick = () => {
        if (counter > 0) {
        setCounter(counter - 1);
        }
    }
    const resClick = () => {
        setCounter(0);
    }

    return(
        <div className="counter">
            <h1>Counter APP</h1>
            <span className="counter_output">{counter}</span>
            <div className="button">
              <button className="incr_btn" onClick={incrClick}>Increment</button>
              <button className="decr_btn" onClick={decrClick}>Decrement
              </button>
              <button className="res_btn" onClick={resClick}>Reset</button>
            </div>
        </div>
    );
}
export default Counter;