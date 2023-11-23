import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Paragraph from "./components/UI/Paragraph/Paragraph";
import List from "./components/List/List";

function App() {
  console.log("Render App Component");
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    console.log("Toggle Button Event.");
    setShowParagraph((prev) => !prev);
  };

  const consoleButton = () => {
    console.log("Console Button Event.");
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <Paragraph />}
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
      <Button onClick={consoleButton}>Show Console</Button>
      <List items={[3, 4, 1, 7, 4, 7, 8, 4, 2]} />
    </div>
  );
}

export default App;
