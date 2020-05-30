import React, { Component } from "react";
import Question from '../Question/Question';
import  './Quiz.css';

class Quiz extends Component {
  
    render() {
    console.log(this.props.questions.length);
    let questionsElem = '';
    questionsElem =this.props.questions.map((quesObj,index) =>{
        return  <Question que={quesObj.question} key={quesObj.id} option={quesObj.option} category= {quesObj.category} > </Question>
    })
    return (
            <div className="centerQue">
                {questionsElem}
            </div>
    )
  }
}
export default Quiz;