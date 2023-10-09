import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./preview.scss";

export default function Resume() {
  const resumeData = useSelector((state) => state.resume.resumeData);
  const parse = require("html-react-parser");

  useEffect(() => {
    console.log(resumeData);
  }, []);

  return (
    <div className="resume_wrapper">
      <div className="contact_info">
        <p className="name">
          {" "}
          {resumeData.contactInfo[0].lastname}{" "}
          <span className="fname">{resumeData.contactInfo[0].firstname}</span>{" "}
        </p>
        <p className="tel_mail">
          {" "}
          {resumeData.contactInfo[0].tel} - {resumeData.contactInfo[0].email}{" "}
        </p>
        <p className="address"> {resumeData.contactInfo[0].address}</p>
      </div>
      <hr />
      <div className="role">
        <p className="title">{resumeData.role[0].role}</p>
        <p className="description">{resumeData.role[0].description}</p>
      </div>
      <hr />
      <div className="competencies">
        <p className="title">KEY COMPETENCIES</p>
        <div className="keys">
          {resumeData.competencies[0]?.map((item, index) => {
            return (
              <p className="items" key={index}>
                {" "}
                {item}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="experience">
        <p className="title">Professional Experience</p>

        {resumeData.experiences?.map((item, index) => {
          return (
            <div className="experience_">
              <div className="name_date">
                <p className="company_name"> {item.companyName} </p>
                <p className="date">
                  {item.startDate} -{" "}
                  {item.endDate === "" ? "Present" : item.endDate}
                </p>
              </div>
              <p className="role"> {item.role} </p>
              <p className="description">{item.description}</p>

              <div className="accomplishment">
                <p className="accomplishment_">Accomplishments:</p>
                {parse(item.achievements)}
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="education">
        <p className="title">Education</p>
        {resumeData.education?.map((item, index) => {
          return (
            <div className="edu_wrapper" key={index}>
              <p className="institution"> {item.institution} </p>
              <p className="degree"> {item.degree} </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
