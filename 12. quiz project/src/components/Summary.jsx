import summaryLogo from "../assets/quiz-complete.png";

import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skipped = userAnswers.filter((answers) => answers === null).length;
  const correctly = userAnswers.filter(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  ).length;
  const inCorrectly = userAnswers.filter(
    (answers, index) =>
      answers !== null && answers !== QUESTIONS[index].answers[0]
  ).length;

  return (
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
              <span className={className}>{answer}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
