import React from "react";
import Counter from "./Counter";

const Counters = ({
  counters,
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
