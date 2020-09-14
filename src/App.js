import React from "react";
import Entry from "./Entry";
import emojis from "./emoji";
import "./styles.css";

const App = () => {
  return (
    <>
      <h1>Emojipedia</h1>

      <div className="emoji-container">
        {emojis.map((emoji) => {
          return (
            <Entry
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
