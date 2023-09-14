import React from "react";
import { useState } from "react";

const ExampleOfHigherOrderComp = (WrappedComponent) => {
  const WithCounter = () => {
    const [Count, setCount] = useState(0);

    const handleInc = () => {
      setCount(Count + 1);
    };
    const handleDec = () => {
      setCount(Count - 1);
    };

    return (
      <div>
        <h2>Defination of HOC</h2>
        <p>It allows us to enhance or extend the functionality of a component by wrapping it with another component. In essence, a Higher Order Component is a function that takes one component and returns another component with additional features, behaviors, or props.</p>
        <WrappedComponent
          Count={Count}
          handleInc={handleInc}
          handleDec={handleDec}
        />
      </div>
    );
  };
  return WithCounter;
};

export default ExampleOfHigherOrderComp;
