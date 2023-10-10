import React, { useEffect } from "react";
import "./nav.scss";
import logo from "./../../assets/major-gen.svg";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import { NavLink, useNavigate } from "react-router-dom";
import { clearReducer } from "../../redux/resumeSlice";
import { useDispatch } from "react-redux";

export default function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const links = [
    {
      name: "Contact Info",
      link: "/dashboard/contact",
      icon: <PersonIcon />,
    },
    {
      name: "Role",
      link: "/dashboard/role",
      icon: <WorkIcon />,
    },
    {
      name: "Competencies",
      link: "/dashboard/competence",
      icon: <AutoAwesomeIcon />,
    },
    {
      name: "Experiences",
      link: "/dashboard/experience",
      icon: <ConstructionIcon />,
    },
    {
      name: "Education",
      link: "/dashboard/education",
      icon: <SchoolIcon />,
    },
  ];

  return (
    <div className="nav_wrapper">
      <div className="title_links">
        <div className="title" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <p className="text">
            Major<span>Gen</span>
          </p>
        </div>
        <div className="link_wrapper">
          {links.map((item, index) => {
            return (
              <NavLink className="links" key={index} to={item.link}>
                {item.icon}
                <p className="title"> {item.name} </p>
              </NavLink>
            );
          })}
        </div>
      </div>

      <button type="button" onClick={() => dispatch(clearReducer())}>
        Clear Resume
      </button>
    </div>
  );
}
