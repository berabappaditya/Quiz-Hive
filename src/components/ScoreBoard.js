import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ScoreBoard() {
  const [lboard, setLboard] = useState([]);
  const history = useHistory();
  async function getLeaderboard() {
    try {
      const leaderData = await axios.get(
        "https://quizhive-backend.herokuapp.com/lboard/getleader"
      );
      const leaderArray = leaderData.data.result;
      setLboard(leaderArray);
    } catch (e) {
      console.error(e.message);
    }
  }
  useEffect(() => {
    getLeaderboard();
  }, []);

  function handleScore(e) {
    history.push("/");
  }

  const scoreStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(235, 235, 235)",
  };
  const scoreCard = {
    width: "550px",
    height: "100vw",
    backgroundColor: "white",
    padding: "0 30px 0 30px",
  };
  const scoreHeader = {
    width: "100%",
    display: "flex",
    margin: "5vh 0 5vh 0",
    color: "#5eff86",
    justifyContent: "center",
    alignItems: "center",
  };
  const scoreFooter = {
    width: "100%",
    display: "flex",
    margin: "4vh 0 2vh 0",
    justifyContent: "center",
    alignItems: "center",
  };
  const scoreList = {};
  return (
    <div className="score_board" style={scoreStyle}>
      <div style={scoreCard}>
        <div style={scoreHeader}>
          <h2>Score Board</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {lboard.map((item, index) => {
              return (
                <tr style={scoreList} key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={scoreFooter}>
          <button
            className="theme_btn_submit d-flex align-items-center justify-content-center"
            onClick={(e) => {
              handleScore(e);
            }}
          >
            {" "}
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
