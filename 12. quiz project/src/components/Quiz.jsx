import { useCallback, useEffect } from "react";

import QUESTIONS from "../questions.js";
import Progress from "./Progress.jsx";

const TIMER = 2;

export default function Quiz({ userAnswers, setUserAnswers }) {
  useEffect(() => {
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

  const quiz = QUESTIONS[userAnswers.length];
  const question = quiz.text;
  const answers = quiz.answers.toSorted(() => Math.random() - 0.5);

  const handleAnswerButtonEvent = useCallback(function (answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  // TODO 답변 선택시 다른 답변 선택 금지
  // TODO 답변 선택시 정답 여부
  // TODO 답변 선택시 1초후 종료

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
