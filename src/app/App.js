import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/noRouteFound';
import { NewQuestion } from '../new-question/newQuestion';
import { Result } from '../result/result';
import { Questions } from '../questions/questions';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
            question: "Where are the three smallest bones in the human body?",
            choiceA: "middle ear",
            choiceB: "nose",
            choiceC: "toes",
            choiceD: "eyes",
            correct: "A"
        },
        {
            question: "What is the most abundant element in the Universe?",
            choiceA: "Helium",
            choiceB: "Oxygen",
            choiceC: "Lithium",
            choiceD: "Hydrogen",
            correct: "D"
        },
        {
            question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
            choiceA: "8 days",
            choiceB: "8 seconds",
            choiceC: "8 minutes",
            choiceD: "8 hours",
            correct: "C"
        },
        {
            question: "What is 10/2?",
            choiceA: "5",
            choiceB: "2",
            choiceC: "8",
            choiceD: "9",
            correct: "A"
        },
        {
            question: "Which planet has the most moons?",
            choiceA: "Saturn",
            choiceB: "Mars",
            choiceC: "Jupiter",
            choiceD: "Uranus",
            correct: "C"
        }
      ],
      resultArray: []
    };
  }

  componentDidMount() {
    // if local storage contains questions, add to question set
    if(localStorage.getItem("questions")){
        let storedQuestions = JSON.parse(localStorage.getItem("questions"));
        this.setState({questions: [...this.state.questions, ...storedQuestions]});
    }
  }

  updateQuestion = (newQuestion) => {
    let question = Object.assign({}, newQuestion);
    this.setState(prevState => {
      return {questions: [...prevState.questions, ...[question]]};
    });
  }

  updateResultArray = (id, result) => {
    this.setState(prevState => {
      let newResultArray = [...prevState.resultArray];
      newResultArray[id] = result;
      return {resultArray: newResultArray};
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>What Do You Know?</h1>
          <Switch>
            <Route
              path="/questions/:id"
              render={(props) => <Questions {...props} updateResultArray={this.updateResultArray} questions={this.state.questions} />}
            />
            <Route
              path="/result"
              render={(props) => <Result {...props} resultArray={this.state.resultArray} />}
            />
            <Route
              path="/question"
              render={(props) => <NewQuestion {...props} updateQuestion={this.updateQuestion} resultArray={this.state.resultArray} />}
            />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}
