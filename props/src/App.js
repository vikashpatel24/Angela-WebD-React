import React from "react";
import Card from "./Components/Card";
import Heading from "./Components/Heading";
import photo from "./assets/photo.jpg";

function App() {
  return (
    <>
    <Heading/>
    <Card name={"vikash"} photo={photo} tel={"+2781483267"} email={"vikash@gmail.com"}/>
    <Card name={"vikash"} photo={photo} tel={"+2781483267"} email={"vikash@gmail.com"}/>
    <Card name={"vikash"} photo={photo} tel={"+2781483267"} email={"vikash@gmail.com"}/>
    </>
  );
}

export default App;
