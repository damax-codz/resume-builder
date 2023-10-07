import React from "react";
import "./header.scss";

export default function Header({ title, description }) {
  return (
    <div className="header_wrapper">
      <p className="title"> {title} </p>
      <p className="description">{description}</p>
    </div>
  );
}
