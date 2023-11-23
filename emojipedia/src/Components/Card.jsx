import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="emoji">{props.emoji}</div>
        <div className="title">{props.title}</div>
        <div className="description">
          <p>{props.meaning}</p>
        </div>
      </div>
    </>
  );
}
