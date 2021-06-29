import React, { useState } from "react";
import "./QiuzView.scss";
import QuestionRend from "./QuestionRend";
import { ResultCountUpdate, ResultCount } from "../../DataContext";
import { useHistory } from "react-router-dom";

function QuizPage() {
  const [correctAnsw, setCorrectAnsw] = useState([]);
  const [userAnsw, setUserAnsw] = useState([]);

  //Cunstom made hook for contextapi
  // const count = ResultCount();
  const setCount = ResultCountUpdate();
  const history = useHistory();

  console.log("buzzinga!!!!", correctAnsw, userAnsw);

  function quizSubmit(e) {
    e.preventDefault();
    let marks = 0;
    for (let i = 0; i < userAnsw.length; i++) {
      console.log("i am the m,atchings", userAnsw[i], correctAnsw[i]);

      if (userAnsw[i] === correctAnsw[i]) {
        marks = marks + 1;
      }
    }

    setCount(marks);
    history.push("/UserResult");
  }

  return (
    <div className="quiz_view d-flex justify-content-center">
      <div className="quiz-container">
        <QuestionRend
          setCorrectAnsw={setCorrectAnsw}
          setUserAnsw={setUserAnsw}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="quizsubmit"
            onClick={(e) => quizSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
