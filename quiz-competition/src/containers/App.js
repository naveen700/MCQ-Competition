import React, { Component } from "react";
import "./App.css";
import Quiz from "../components/Quiz/Quiz";
import Modal from '../components/modal/modal';
const url = "http://localhost:8080/quiz/";

class App extends Component {
  state = {
    questions: [],
    wrong: 0,
    right: 0,
    unans: 0
  };

  componentDidMount() {
    fetch(url + "questions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState(data);
      });
  }
  submitAnswer = () => {
    console.log("answer submiteed");
    let questions = this.state.questions;
    let answerObj = {};
    questions.forEach((que) => {
      let ele = document.getElementsByName(que.category);
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) answerObj[que.id] = ele[i].value.trim();
      }
    });

    fetch(url + "/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answerObj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          wrong: data.wrongAns,
          right: data.rightAns,
          unans : data.notAnswered
        })
        document.getElementById('id01').style.display ="block";
      });
  };
  render() {
    let quiz = "";
    if (!this.state.questions) {
      quiz = <p>No Questions</p>;
    } else {
      quiz = (
        <div>
          <Quiz questions={this.state.questions}></Quiz>
          <button
            type="submit"
            onClick={this.submitAnswer}
            className="btn-submit"
          >
            Submit Answers
          </button>
        </div>
      );
    }
    return (
      <div className="App">
        <Modal right={this.state.right} wrong={this.state.wrong} unans={this.state.unans} ></Modal>
        <header className="App-header">
          <p>Quiz Competition</p>
        </header>
        {quiz}
      </div>
    );
  }
}

export default App;
