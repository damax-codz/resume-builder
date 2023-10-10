import React, { useEffect } from "react";
import "./loading.scss";
import logo from "./../../assets/major-gen.svg";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard/contact");
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      <div className="logo_name">
        <img src={logo} alt="logo" />
        <p className="text">
          Major<span>Gen</span>
        </p>
      </div>
      <div className="description">The #1 AI POWERED RESUME CREATOR</div>
    </div>
  );
}
