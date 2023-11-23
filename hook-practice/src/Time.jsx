import React, { useState } from "react";

const time = new Date().toLocaleTimeString();
export default function Time() {
  const [state, setState] = useState(time);

  function update() {
    const time = new Date().toLocaleTimeString();
    setState(time);
  }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={update}>Update</button>
    </>
  );
}
