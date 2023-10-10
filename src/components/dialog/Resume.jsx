import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./preview.scss";

export default function Resume() {
  const resumeData = useSelector((state) => state.resume.resumeData);
  const parse = require("html-react-parser");

  useEffect(() => {
    // console.log(resumeData);
    setTimeout(() => {
      window.print();
    }, 2000);
  }, []);

  return <>{parse(resumeData.resumePreview)}</>;
}
