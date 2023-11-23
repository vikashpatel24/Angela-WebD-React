import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./Notes";

function App() {
  return (
   <>
    <Header/>
    {notes.map((x) => (
      <Note
        key={x.key}
        title={x.title}
        content={x.content}
      />
    ))}
    <Footer/>
   </>
  );
}

export default App;
