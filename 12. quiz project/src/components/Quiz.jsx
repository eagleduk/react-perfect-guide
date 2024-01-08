import { useEffect, useState } from "react";

import summaryLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Progress from "./Progress.jsx";

const TIMER = 2;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (userAnswers.length === QUESTIONS.length) return;
    console.log("Timer Start");
    const timeout = setTimeout(() => {
      setUserAnswers((prev) => {
        return [...prev, null];
      });
    }, TIMER * 1000);

    return () => {
      console.log("Timer End");
      clearTimeout(timeout);
    };
  }, [userAnswers]);

  if (userAnswers.length === QUESTIONS.length) {
    const skipped = userAnswers.filter((answers) => answers === null).length;
    const correctly = userAnswers.filter(
      (answers, index) => answers === QUESTIONS[index].answers[0]
    ).length;
    const inCorrectly = userAnswers.filter(
      (answers, index) =>
        answers !== null && answers !== QUESTIONS[index].answers[0]
    ).length;

    return (
      <>
        <div id="summary">
          <img src={summaryLogo} />
          <h2>Quiz Complete!</h2>
          <div id="summary-stats">
            <p>
              <span className="number">
                {Math.round((+skipped / QUESTIONS.length) * 100)}%
              </span>
              <span className="text">skipped</span>
            </p>
            <p>
              <span className="number">
                {Math.round((+correctly / QUESTIONS.length) * 100)}%
              </span>
              <span className="text">answered correctly</span>
            </p>
            <p>
              <span className="number">
                {Math.round((+inCorrectly / QUESTIONS.length) * 100)}%
              </span>
              <span className="text">answered incorrectly</span>
            </p>
          </div>
          <ol>
            {userAnswers.map((answer, index) => {
              const className =
                "user-answer " +
                (answer === null
                  ? "skipped"
                  : QUESTIONS[index].answers[0] === answer
                  ? "correct"
                  : "wrong");

              return (
                <li key={QUESTIONS[index].id}>
                  <h3>{index + 1}</h3>
                  <p className="question">{QUESTIONS[index].text}</p>
                  <span className={className}>
                    {QUESTIONS[index].answers[0]}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </>
    );
  }

  const quiz = QUESTIONS[userAnswers.length];
  const question = quiz.text;
  const answers = quiz.answers;

  function handleAnswerButtonEvent(answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <Progress max={TIMER * 1000} index={userAnswers.length} />
        <h2>{question}</h2>
        <ul id="answers">
          {answers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleAnswerButtonEvent(answer)}>
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
