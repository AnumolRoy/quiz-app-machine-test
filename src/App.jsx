import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Trivia from "./components/Trivia";
import QuestioSelector from "./components/QuestioSelector/QuestioSelector";


function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [earned, setEarned] = useState(0);

  const [numOfQuestions,setNumOfQuestions] = useState(null)


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the scientific name of a butterfly?",
      answers: [
        {
          text: "Apis",
          correct: false,
        },
        {
          text: "Coleoptera",
          correct: false,
        },
        {
          text: "Formicidae",
          correct: false,
        },
        {
          text: "Rhopalocera",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "How hot is the surface of the sun?",
      answers: [
        {
          text: "1,233 K",
          correct: false,
        },
        {
          text:  "12,130 K",
          correct: false,
        },
        {
          text: "101,300 K",
          correct: false,
        },
        {
          text: "5,778 K",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who are the actors in The Internship?",
      answers: [
        {
          text:  "Ben Stiller, Jonah Hill",
          correct: false,
        },
        {
          text: "Courteney Cox, Matt LeBlanc",
          correct: false,
        },
        {
          text: "Kaley Cuoco, Jim Parsons",
          correct: false,
        },
        {
          text: "Vince Vaughn, Owen Wilson",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What is the capital of Spain?",
      answers: [
        {
          text: "Berlin",
          correct: false,
        },
        {
          text: "Buenos Aires",
          correct: false,
        },
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "San Juan",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What are the school colors of the University of Texas at Austin?",
      answers: [
        {
          text: "Black, Red",
          correct: false,
        },
        {
          text: "Blue, Orange",
          correct: false,
        },
        {
          text: "White, Old gold, Gold",
          correct: false,
        },
        {
          text:"White, Burnt Orange",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "When was Mahatma Gandhi born?",
      answers: [
        {
          text:"December 15, 1872",
          correct: false,
        },
        {
          text: "July 18, 1918",
          correct: false,
        },
        {
          text: "January 15, 1929",
          correct: false,
        },
        {
          text: "October 2, 1869",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: 1 },
        { id: 2, amount: 2 },
        { id: 3, amount: 3 },
        { id: 4, amount: 4 },
        { id: 5, amount: 5 },
        { id: 6, amount: 6 },
        { id: 7, amount: 7 },
        { id: 8, amount: 8 },
        { id: 9, amount: 9 },
        { id: 10, amount: 10 },
       
      ].reverse(),
    []
  );

data.length=numOfQuestions

  useEffect(() => {
    setEarned(questionNumber);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
    
      {!username ? (

        <Start setUsername={setUsername} />

      ) : (
        <>

          <div className="main">
            {timeOut ? (
              <>
              <h1 className="endText">Your Score is: {earned}</h1>
              <h1 className="endText">Percentage :{Math.floor(earned / numOfQuestions * 100)}</h1>
              <button onClick={()=>window.location.reload()}  style={{ width: "300px", height: "50px",marginLeft:"610px",marginBottom:"200px"}} >Take once more</button>
              </>
            ) : (
              <>
                <div className="top">
                 
                </div>
                <div className="bottom">
                  {!numOfQuestions?(<QuestioSelector setNumOfQuestions={setNumOfQuestions} />):(
                    <Trivia
                    numOfQuestions={numOfQuestions}
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                  )
                  }
                  
                </div>
              </>
            )}
          </div>
         
        </>
      )}
    </div>
  );
}

export default App;