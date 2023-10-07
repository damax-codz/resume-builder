import React from "react";
import Nav from "../../components/Nav/Nav";
import "./dashboard.scss";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard_wrapper">
      <Nav />
      <div className="outlet_wrapper">
        <Outlet />
      </div>
    </div>
  );
}
