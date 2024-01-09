import { useState } from "react";

import QUESTIONS from "../questions.js";
import Quiz from "./Quiz";
import Summary from "./Summary";

export default function Main() {
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <main>
      {userAnswers.length === QUESTIONS.length ? (
        <Summary userAnswers={userAnswers} />
      ) : (
        <Quiz
          key={userAnswers.length}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
      )}
    </main>
  );
}
