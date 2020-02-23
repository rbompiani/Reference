import React, { useState } from 'react';

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";


function App() {
  //display multiple user output components
  //display one user input component
  //add state to contain userName and paragraph data

  const [usernameState, setUsernameState] = useState("Reba");

  const [paragraphState, setParagraphState] = useState({
    paragraphs: [
      "this is the first paragraph",
      "this is the second paragraph"
    ]
  })

  const usernameInputHandler = e => {
    setUsernameState(e.target.value);
  }

  return (
    <div className="App">
      <UserInput changeHandler={usernameInputHandler} value={usernameState} />
      {paragraphState.paragraphs.map((par) => {
        return (
          <UserOutput
            userName={usernameState}
            paragraph={par} />
        )
      })}
    </div>
  );
}

export default App;
