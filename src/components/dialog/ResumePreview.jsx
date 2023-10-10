import { Dialog, IconButton } from "@mui/material";
import "./preview.scss";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from "react-redux";
// import parse from "html-react-parser";

export default function ResumePreview(props) {
  const editorRef = useRef(null);
  const resumeData = useSelector((state) => state.resume.resumeData);
  // const parse = require("html-react-parser");
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    console.log(resumeData);
  }, []);

  return (
    <Dialog
      open={props.OpenPreview}
      onClose={props.togglePreview}
      className="preview_wrapper"
    >
      <div className="header">
        <p className="title">Resume Preview</p>
        <IconButton onClick={props.togglePreview}>
          <ClearIcon />
        </IconButton>
      </div>

      <>
        <Editor
          apiKey="nm1z5f6cymv8sfce8f4ngcqwstwxngdkflmnfk0x0yu20twj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={`
           <div class="resume_wrapper">
            <div class="contact_info">
              <p class="name">

                ${resumeData.contactInfo[0].lastname}
                <span class="fname">${
                  resumeData.contactInfo[0].firstname
                }</span>
              </p>
              <p class="tel_mail">

                ${resumeData.contactInfo[0].tel} - ${
            resumeData.contactInfo[0].email
          }
              </p>
              <p class="address"> ${resumeData.contactInfo[0].address}</p>
            </div>
            <hr />
            <div class="role">
              <p class="title">${resumeData.role[0].role}</p>
              <p class="description">${resumeData.role[0].description}</p>
            </div>
            <hr />
            <div class="competencies">
              <p class="title">KEY COMPETENCIES</p>
              <div class="keys">
                ${resumeData.competencies[0].reduce(
                  (acc, work) => acc + `<p class="items">${work}</p >`,
                  ""
                )}
              </div>
            </div>
            <hr />
            <div class="experience">
              <p class="title">Professional Experience</p>

            

              ${resumeData.experiences
                .map((item) => {
                  return `<div class="experience_">
                    <div class="name_date">
                      <p class="company_name"> ${item.companyName} </p>
                      <p class="date">
                        ${item.startDate} -
                        ${item.endDate === "" ? "Present" : item.endDate}
                      </p>
                    </div>
                    <p class="role"> ${item.role} </p>
                    <p class="description">${item.description}</p>

                    <div class="accomplishment">
                      <p class="accomplishment_">Accomplishments:</p>
                      ${item.achievements}
                    </div>
                  </div>`;
                })
                .join(" ")}
            </div>
            <hr />
            <div class="education">
              <p class="title">Education</p>
              ${resumeData.education
                ?.map((item, index) => {
                  return `<div class="edu_wrapper" key=${index}>
                    <p class="institution"> ${item.institution} </p>
                    <p class="degree"> ${item.degree} </p>
                  </div>`;
                })
                .join(" ")}
            </div>
            <hr />
          </div>
            `}
          // initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Roboto,Arial,sans-serif; font-size:24px } .resume_wrapper .name{text-transform:capitalize !important; font-size:30px !important;  } .resume_wrapper p{ margin:0px;padding:0px} .resume_wrapper { padding: 50px;margin:50px; box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.266), -2px -2px 3px rgba(0, 0, 0, 0.266); } .resume_wrapper hr { margin: 30px 0px; } .resume_wrapper .contact_info, .resume_wrapper .role, .resume_wrapper .competencies, .resume_wrapper .experience, .resume_wrapper .education { display: flex; flex-direction: column; align-items: center; } .resume_wrapper .contact_info .name, .resume_wrapper .role .title, .resume_wrapper .competencies .title,.resume_wrapper .experience .title, .resume_wrapper .education .edu_wrapper{    display: flex;align-items: flex-start; }, .resume_wrapper .experience .title, .resume_wrapper .education .title { font-family: Crimson Pro; font-style: normal; font-weight: 400; font-size: 15px; color: #000000; text-transform: uppercase; } .resume_wrapper .contact_info .name .fname { color: #ff5757; } .resume_wrapper .contact_info .tel_mail, .resume_wrapper .contact_info .address, .resume_wrapper .role .description, .resume_wrapper .competencies .keys .item, .resume_wrapper .experience .role,  .resume_wrapper .experience .description, .resume_wrapper .experience .accomplishment .accomplishment_, .resume_wrapper .education .description,.resume_wrapper .education .edu_wrapper .degree { font-family: Roboto,Arial,sans-serif ; font-style: normal; font-weight: 400; font-size: 16px; color: #000000; } .resume_wrapper .experience .experience_ { width: 100%; margin-bottom: 20px; display: flex; flex-direction: column; align-items: flex-start; } .resume_wrapper .experience .name_date { width: 100%; display: flex; justify-content: space-between; } .resume_wrapper .experience .name_date .company_name, .resume_wrapper .experience .name_date .date,.resume_wrapper .experience .role,.resume_wrapper .education .edu_wrapper .institution  { font-weight: 600;font-family: Roboto,Arial,sans-serif;font-size:16px;color:#000000;font-style:normal; } .resume_wrapper .experience .accomplishment { margin-top: 15px; } .resume_wrapper .competencies .keys { width: 100%; text-align: center; display: grid; grid-template-columns: 1fr 1fr 1fr; } .resume_wrapper .competencies .keys .items{     font-family: Roboto,Arial,sans-serif;font-style: normal;font-weight: 400;font-size: 16px;color: #000000;margin-top: 8px; } .resume_wrapper .experience .accomplishment .accomplishment_ { text-align: start; } .resume_wrapper .experience .description { margin-top: 8px; } .resume_wrapper img { max-width: 100%; height: auto; }.contact_info .name{font-family:Crimson Pro;} .resume_wrapper .role .title, .resume_wrapper .competencies .title, .resume_wrapper .experience .title, .resume_wrapper .education .title{text-transform:uppercase;font-family: Crimson Pro;font-style: normal;font-weight: 400;font-size: 15px;color: #000000;text-transform: uppercase; } .resume_wrapper .education .edu_wrapper {width: 100%;flex-direction: column;align-items: flex-start;}.resume_wrapper .role .description { font-style: italic } .resume_wrapper .experience .accomplishment ul li {font-family: Roboto,Arial,sans-serif ; font-style: normal; font-weight: 400; font-size: 16px; color: #000000;}  .resume_wrapper .experience .accomplishment ul { margin:0px;}",
            // editor_css: "./preview.scss?" + new Date().getTime(),
          }}
        />
        <div className="btn">
          <button type="button" onClick={log}>
            Save Resume
          </button>
        </div>
      </>
    </Dialog>
  );
}
