import React, { useState, useEffect } from "react";
import "./QiuzView.scss";
import axios from "axios";
import { WhisperSpinner } from "react-spinners-kit";

function QuestionRend({ setCorrectAnsw, setUserAnsw }) {
  const [quizes, SetQuizes] = useState([]);
  const uname = localStorage.getItem("userName");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  console.warn("I am your selected answer", one, two, three, four, five);

  async function fetchQuestion() {
    try {
      const questions = await axios.get(
        "https://quizhive-backend.herokuapp.com/quiz/getQuiz"
      );
      const quizArray = questions.data.result;
      SetQuizes(quizArray);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetchQuestion();
  }, []);
  console.error("iam your quiz", quizes);

  function correctRend() {
    let rightArr = [];
    if (quizes.length > 1) {
      let i = 0;
      while (i < quizes.length) {
        rightArr.push(quizes[i].correct_answer);
        i++;
      }
    }
    return rightArr;
  }

  function userArray() {
    let userSetArray = [];
    userSetArray.splice(0, 0, one, two, three, four, five);
    return userSetArray;
  }

  useEffect(() => {
    setCorrectAnsw(correctRend());
  }, [quizes]);

  useEffect(() => {
    setUserAnsw(userArray());
  }, [one, two, three, four, five]);

  return (
    <div>
      <h1>{uname} attempt your quiz</h1>
      <div className="question_card">
        {/* for async function at loading quizes array is empty to avoid error ternaty opertatro is used */}
        {quizes.length > 0 ? (
          <>
            <h5>{quizes[0].question}</h5>
            <div
              className="answer_sec"
              onChange={(e) => setOne(e.target.value)}
            >
              {quizes[0].answers.map((item, index) => {
                return (
                  <div className="answers" key={index}>
                    <input type="radio" name="one" id={item} value={item} />
                    {item}
                  </div>
                );
              })}
            </div>

            <h5>{quizes[1].question}</h5>
            <div
              className="answer_sec"
              onChange={(e) => setTwo(e.target.value)}
            >
              {quizes[1].answers.map((item, index) => {
                return (
                  <div className="answers" key={index}>
                    <input type="radio" name="two" id={item} value={item} />
                    {item}
                  </div>
                );
              })}
            </div>

            <h5>{quizes[2].question}</h5>
            <div
              className="answer_sec"
              onChange={(e) => setThree(e.target.value)}
            >
              {quizes[2].answers.map((item, index) => {
                return (
                  <div className="answers" key={index}>
                    <input type="radio" name="three" id={item} value={item} />
                    {item}
                  </div>
                );
              })}
            </div>

            <h5>{quizes[3].question}</h5>
            <div
              className="answer_sec"
              onChange={(e) => setFour(e.target.value)}
            >
              {quizes[3].answers.map((item, index) => {
                return (
                  <div className="answers" key={index}>
                    <input type="radio" name="four" id={item} value={item} />
                    {item}
                  </div>
                );
              })}
            </div>

            <h5>{quizes[4].question}</h5>
            <div
              className="answer_sec"
              onChange={(e) => setFive(e.target.value)}
            >
              {quizes[4].answers.map((item, index) => {
                return (
                  <div className="answers" key={index}>
                    <input type="radio" name="five" id={item} value={item} />
                    {item}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center loader_spinner">
            <WhisperSpinner size={30} color="#5eff86" loading={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionRend;
