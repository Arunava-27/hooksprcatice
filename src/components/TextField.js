import React, { useState } from "react";

function TextField() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const reset = () => {
    setCount(initialCount);
  };

  const increment = () => {
    setCount(prevCount => prevCount+1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount-1)
  }
  const incrementbyFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount+1)        
    }
  }

  
  return (
    <>
      <div className="container text-center">
        <div class="row align-items-center">
          <h5 className="my-3 mx-3">
            Count : <span class="badge bg-secondary">{count}</span>
          </h5>
          <div>
            <button
              className="btn btn-primary my-3 mx-3"
              onClick={reset}
            >
              Reset
            </button>
            <button className="btn btn-primary my-3 mx-3" onClick={increment}>
              Increment
            </button>
            <button className="btn btn-primary my-3 mx-3" onClick={decrement}>
              Decrement
            </button>
            <button className="btn btn-primary my-3 mx-3" onClick={incrementbyFive}>
              Increase By 5
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextField;
