import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
      onBlur={props.onBlur}
      value={props.value}
      placeholder={props.placeholder}
      className="reusable_input"
    />
  );
}
