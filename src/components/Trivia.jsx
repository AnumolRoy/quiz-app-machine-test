import { useEffect, useState } from "react";


export default function Trivia({
  data,
  numOfQuestions,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");


  

  useEffect(() => {
    setQuestion(data[questionNumber]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 1000);

      delay(2000, () => {
      if (a.correct) {
        delay(1000, () => {
          if(numOfQuestions==questionNumber+1){
             delay(1000, () => {
             setTimeOut(true);
        });
          }
          setQuestionNumber(questionNumber+1);
          setSelectedAnswer(null);
        });
        
      } else {
        // wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
        // setTimeout(() => {
        //   setTimeOut(true);
        // }, 1000);
      }
    // }, 5000);
      })
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}







