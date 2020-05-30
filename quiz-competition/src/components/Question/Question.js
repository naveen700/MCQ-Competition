import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  render() {
    return (
      <div className="Centered">
        <p>Question: {this.props.que} </p>
        <input
          type="radio"
          id={this.props.option[0]}
          name={this.props.category}
          value={this.props.option[0]}
        />
        <label for={this.props.option[0]}> {this.props.option[0]} </label>
        <br />
        <input
          type="radio"
          id={this.props.option[1]}
          name={this.props.category}
          value={this.props.option[1]}
        />
        <label for={this.props.option[1]}> {this.props.option[1]} </label>
        <br />
        <input
          type="radio"
          id={this.props.option[2]}
          name={this.props.category}
          value={this.props.option[2]}
        />
        <label for={this.props.option[2]}> {this.props.option[2]} </label> <br />
        <input
          type="radio"
          id={this.props.option[3]}
          name={this.props.category}
          value={this.props.option[3]}
        />
        <label for={this.props.option[3]}> {this.props.option[3]} </label>
      </div>
    );
  }
}
export default Question;
