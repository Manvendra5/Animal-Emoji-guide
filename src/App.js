import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //1.Create emoji Dictionary
  var emojiDictionary = {
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐈": "Cat",
    "🐎": "Horse",
    "🦓": "Zebra",
    "🦏": "Rihnoceros"
  };

  var [meaning, setMeaning] = useState("");

  var emojis = Object.keys(emojiDictionary);

  function handleInput(event) {
    var emoji = event.target.value;
    if (emojiDictionary[emoji] !== undefined) {
      console.log(emojiDictionary[emoji]);
      setMeaning(emojiDictionary[emoji]);
    } else {
      setMeaning("The Emoji you are looking for is not in our database");
    }
  }

  function emojiOnClick(item) {
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Animals Emoji Guide</h1>
      <input onChange={handleInput} placeholder="Enter Emoji" />
      <div style={{ fontSize: "large", marginTop: "1rem", fontWeight: "bold" }}>
        {meaning}
      </div>

      <div style={{ fontSize: "large", marginTop: "1rem", fontWeight: "bold" }}>
        Chekout Available Emojis
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        {emojis.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojiOnClick(item)}
              style={{ fontSize: "2rem", marginTop: "1rem" }}
            >
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
