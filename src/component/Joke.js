import React from "react";
function Joke(props) {
  console.log(props);
  return (
    <div className="joke-card">
      <h3 style={{ display: props.detail.question ? "block" : "none" }}>
        questin:{props.detail.question}
      </h3>
      <h3>{props.detail.answer}</h3>
    </div>
  );
}
export default Joke;
