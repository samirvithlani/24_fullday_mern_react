import React from "react";

export const MyButton = (props) => {
  const test = () => {};
  return (
    <button
      onClick={() => {
        props.funName();
      }}
      className={props.class || "btn btn-primary"}
    >
      {props.name || "test"}
    </button>
  );
};
