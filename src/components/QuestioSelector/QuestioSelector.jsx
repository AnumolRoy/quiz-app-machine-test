import React, { useState } from "react";
import "./questioselector.css";

function QuestioSelector({setNumOfQuestions}) {

  

  const numOfQuestions=(e)=>{
    setNumOfQuestions(Number(e.target.innerText))
  }
  return (
    <div className="parantDiv">
      <div className="auth-form-conatiner">
        <h2>Select numbers of Questions</h2>
       
          <div className="question-numbers-btn-header">
            <div>
              <button onClick={numOfQuestions} className="question-numbers-btn ">4</button>
            </div>
            <div>
              <button onClick={numOfQuestions} className="question-numbers-btn">6</button>
            </div>
            <div>
              <button onClick={numOfQuestions} className="question-numbers-btn">8</button>
            </div>
            <div>
              <button onClick={numOfQuestions} className="question-numbers-btn">10</button>
            </div>
          </div>
          <button className="btn" type="submit">
            <b>Next</b>{" "}
          </button>

      </div>
    </div>
  );
}

export default QuestioSelector;
