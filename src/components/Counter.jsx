import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    // console.log("props", this.props);
    const { counter } = this.props;
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
