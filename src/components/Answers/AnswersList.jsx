import React from "react";
import "../../assets/styles/style.css";
import Answer from "./Answer";
const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      {props.Dataset.answers.map((answer) => (
        <Answer
          key={answer.id}
          nextId={answer.nextId}
          content={answer.content}
          select={props.select}
        />
      ))}
    </div>
  );
};

export default AnswersList;
