import { useEffect, useRef, useState } from "react";

import QUESTIONS from "../questions.js";
import Progress from "./Progress.jsx";

const TIMER = 6;

export default function Quiz({ userAnswers, setUserAnswers }) {
  const answers = useRef();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    if (answers.current === undefined) return;
    const timeout = setTimeout(() => {
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });
    }, TIMER * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedAnswer, answers.current]);

  const quiz = QUESTIONS[userAnswers.length];
  const question = quiz.text;
  if (answers.current === undefined)
    answers.current = quiz.answers.toSorted(() => Math.random() - 0.5);

  function handleAnswerButtonEvent(answer) {
    setSelectedAnswer(answer);

    setTimeout(() => {
      setIsCorrect(answer === quiz.answers[0]);
    }, 1000);

    setTimeout(() => {
      setUserAnswers((prev) => {
        return [...prev, answer];
      });
    }, 2000);
  }

  let time = TIMER * 1000;
  if (isCorrect !== null) time = 1000;

  return (
    <div id="quiz">
      <div id="question">
        <Progress
          max={time}
          answered={selectedAnswer !== null}
          key={isCorrect}
        />
        <h2>{question}</h2>
        <ul id="answers">
          {answers.current.map((answer) => {
            let className = "";

            if (selectedAnswer !== null && selectedAnswer === answer) {
              className += " selected";
              if (isCorrect !== null)
                className += isCorrect ? " correct" : " wrong";
            }

            return (
              <li className="answer" key={answer}>
                <button
                  onClick={() => handleAnswerButtonEvent(answer)}
                  className={className}
                  disabled={
                    selectedAnswer !== null && selectedAnswer !== answer
                  }
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
