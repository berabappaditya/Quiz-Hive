import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [question, setQuestion] = useState("");
  const [correct_answer, setCorrectAnsw] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  async function submitQuestion(e) {
    let correctAnsArr = [];
    correctAnsArr.splice(0, 0, answer1, answer2, answer3, answer4);
    try {
      const sendData = await axios.post("http://localhost:8080/quiz/postQuiz", {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "Medium",
        question: question,
        correct_answer: correct_answer,
        answers: correctAnsArr,
      });
      console.log(sendData);
      alert("question is successfully added to database");
    } catch (e) {
      console.error(e.message);
    }
  }

  const qfrom = {
    width: "60%",
    padding: "2vw",
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div style={qfrom}>
        <h2>Add question To database</h2>
        <label htmlFor="question">Enter question:</label> <br />
        <input
          type="text"
          name="question"
          placeholder="Enter question"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <br />
        <hr></hr>
        <label htmlFor="question">Enter Answer:</label> <br />
        <input
          type="text"
          name="answers"
          placeholder="Enter  answer1"
          onChange={(e) => {
            setAnswer1(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="answers"
          placeholder="Enter answer2"
          onChange={(e) => {
            setAnswer2(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="answers"
          placeholder="Enter answer3"
          onChange={(e) => {
            setAnswer3(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="text"
          name="answers"
          placeholder="Enter  answer4"
          onChange={(e) => {
            setAnswer4(e.target.value);
          }}
        />
        <br />
        <hr></hr>
        <label htmlFor="correct_answer">Enter correct answer:</label> <br />
        <input
          type="text"
          name="correct_answer"
          placeholder="Enter correct answer"
          onChange={(e) => {
            setCorrectAnsw(e.target.value);
          }}
        />
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button
            onClick={(e) => {
              submitQuestion(e);
            }}
            className="theme_btn_submit"
          >
            Add the Qestion
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
