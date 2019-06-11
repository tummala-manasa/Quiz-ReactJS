import React from 'react';
import './newQuestion.css';
import { Link } from 'react-router-dom';

export class NewQuestion extends React.Component {
  handleSubmit = (e) => {
    let questionForm =  e.target;
    e.preventDefault();
    var newQuestion = {
      question: questionForm.question.value,
      choiceA: questionForm.choiceA.value,
      choiceB: questionForm.choiceB.value,
      choiceC: questionForm.choiceC.value,
      choiceD: questionForm.choiceD.value,
      correct: questionForm.correct.value
    };
    this.props.updateQuestion(newQuestion);
    // if local storage contains questions, pull and update stored data. Store new object otherwise
    if(localStorage.getItem("questions")){
        var questions = JSON.parse(localStorage.getItem("questions"));
        questions.push(newQuestion);
        localStorage.setItem("questions", JSON.stringify(questions));
    }
    else{
      let questions = [newQuestion];
        localStorage.setItem("questions", JSON.stringify(questions));
    }
    questionForm.reset();
    return false;
  }
  render() {
    return (
      <form id="add-question" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Add a Question:</h2>
        <input type="text" required name="question" placeholder="Full Question" />
        <input type="text" required name="choiceA" placeholder="Choice A" />
        <input type="text" required name="choiceB" placeholder="Choice B" />
        <input type="text" required name="choiceC" placeholder="Choice C" />
        <input type="text" required name="choiceD" placeholder="Choice D" />
        Correct Answer: <select form="add-question" name="correct" placeholder="Correct Answer">
          <option value="A">Choice A</option>
          <option value="B">Choice B</option>
          <option value="C">Choice C</option>
          <option value="D">Choice D</option>
        </select>
        <input type="submit" value="Submit Question" />
        <hr />
        <footer>
            <p><Link to="/questions/0">Take the quiz!</Link></p>
        </footer>
      </form>
    );
  }
}
