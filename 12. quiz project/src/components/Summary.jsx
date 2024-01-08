import summaryLogo from "../assets/quiz-complete.png";

import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skipped = userAnswers.filter((answers) => answers === null).length;
  const correctly = userAnswers.filter(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  ).length;

  const skippedPercent = Math.round((+skipped / QUESTIONS.length) * 100);
  const correctPercent = Math.round((+correctly / QUESTIONS.length) * 100);
  const incorrectPercent = 100 - skippedPercent - correctPercent;

  return (
    <div id="summary">
      <img src={summaryLogo} />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPercent}%</span>
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
