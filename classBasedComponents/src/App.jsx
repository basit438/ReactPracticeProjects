import React, { Component } from 'react';
import './App.css';

// Creating a simple counter application using class-based components
class CounterApp extends Component {
  constructor(props) {
    super(props);
    // Initializing state with count and incrementValue
    this.state = {
      count: 0,
      incrementValue: 1,
    };
    console.log("Initial state:", this.state); // Check initial state
  }

  // Method to handle increment
  handleIncrement = () => {
    this.setState((prevState) => {
      console.log("Incrementing by:", prevState.incrementValue); // Log increment amount
      return {
        count: prevState.count + prevState.incrementValue,
      };
    }, () => {
      console.log("Updated count after increment:", this.state.count); // Log updated count
    });
  };

  // Method to handle decrement
  handleDecrement = () => {
    this.setState((prevState) => {
      console.log("Decrementing by:", prevState.incrementValue); // Log decrement amount
      return {
        count: prevState.count - prevState.incrementValue,
      };
    }, () => {
      console.log("Updated count after decrement:", this.state.count); // Log updated count
    });
  };

  // Method to handle input change for increment value
  handleChange = (event) => {
    const value = parseInt(event.target.value) || 1; // Set default if input is empty or invalid
    console.log("Increment value changed to:", value); // Log new increment value
    this.setState({ incrementValue: value });
  };

  // Method to reset counter to initial state
  resetCounter = () => {
    console.log("Resetting counter"); // Log reset action
    this.setState({ count: 0, incrementValue: 1 }, () => {
      console.log("State after reset:", this.state); // Log state after reset
    });
  };

  // Render method to display component
  render() {
    console.log("Rendering component with state:", this.state); // Log state each render
    return (
      <div className="app-container">
        <h1>React Counter App with Class-based Components</h1>
        <div className="counter-display">
          <h2>Count: {this.state.count}</h2>
        </div>
        <div className="controls">
          <button className="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
        <div className="increment-settings">
          <label>Increment Value:</label>
          <input
            type="number"
            min="1"
            value={this.state.incrementValue}
            onChange={this.handleChange}
          />
        </div>
        <button className="reset-button" onClick={this.resetCounter}>
          Reset
        </button>
      </div>
    );
  }
}

export default CounterApp;
