import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import emojibook from "./Emoji";

// console.log(emojibook);

function App(props) {
  return (
    <>
      <Header />
      {emojibook.map((emojis) => (
        <Card
          key={emojis.id}
          emoji={emojis.img}
          title={emojis.title}
          meaning={emojis.desc}
        />
      ))}
    </>
  );
}

export default App;
