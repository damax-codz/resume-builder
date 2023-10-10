import React, { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import "./../style.scss";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../../redux/resumeSlice";
import AddIcon from "@mui/icons-material/Add";

export default function Experience() {
  const schema = Yup.object().shape({
    companyName: Yup.string().required("This field is required !"),
    role: Yup.string().required("This field is required !"),
    description: Yup.string().required("This field is required !"),
    startDate: Yup.string().required("This field is required !"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checked, setChecked] = React.useState(false);
  const resumeData = useSelector((state) => state.resume.resumeData);
  const [convertedContent, setConvertedContent] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [formState, setFormState] = useState(true);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    console.log(resumeData);
  }, [editorState]);
  return (
    <div className="fill_wrapper">
      <Header
        title="Work Experience:"
        description="Your work experience are prominently featured in the resume body,
          making it convenient for potential employers to know what you are capable of."
      />

      {resumeData.experiences.length > 0 ? (
        <div className="experience_wrapper">
          {resumeData.experiences.map((item, index) => {
            return (
              <div className="experiences" key={index}>
                <p className="role"> {item.role} </p>
                <p className="date">
                  {item.startDate} -{" "}
                  {item.endDate === "" ? "Present" : item.endDate}
                </p>
                <p className="description"> {item.description} </p>
              </div>
            );
          })}

          <button onClick={() => setFormState(true)} className="add">
            <AddIcon sx={{ color: "#000000a1" }} />
            <p>Add another Experience</p>
          </button>
          <div className="btn">
            <button
              className="back"
              type="button"
              onClick={() => navigate("/dashboard/experience")}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard/education")}
            >
              Save and continue
            </button>
          </div>
        </div>
      ) : null}

      {formState ? (
        <Formik
          initialValues={{
            companyName: "",
            role: "",
            description: "",
            startDate: "",
            endDate: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            dispatch(
              addExperience({ ...values, achievements: convertedContent })
            );
            resetForm();
            setFormState(false);
          }}
          validationSchema={schema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="form_wrapper">
              <div className="input_wrapper">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  value={values.companyName}
                  placeholder="Organization Name"
                />
                {touched.companyName && errors.companyName && (
                  <span className="error_message">{errors.companyName}</span>
                )}
              </div>

              <div className="input_wrapper">
                <input
                  type="text"
                  id="role"
                  name="role"
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  value={values.role}
                  placeholder="Job Title"
                />
                {touched.role && errors.role && (
                  <span className="error_message">{errors.role}</span>
                )}
              </div>
              <div className="names">
                <div className="input_wrapper">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.startDate}
                    placeholder="Start Date"
                  />
                  {touched.startDate && errors.startDate && (
                    <span className="error_message">{errors.startDate}</span>
                  )}
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        onChange={handleCheckChange}
                        checked={checked}
                      />
                    }
                    label="I currently work here"
                  />
                </div>

                {!checked ? (
                  <div className="input_wrapper">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      onBlur={handleBlur}
                      value={values.endDate}
                      placeholder="End Date"
                    />
                    {touched.endDate && errors.endDate && (
                      <span className="error_message">{errors.endDate}</span>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="input_wrapper">
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  value={values.description}
                  placeholder="Provide a concise overview of your company"
                />
                {touched.description && errors.description && (
                  <span className="error_message">{errors.description}</span>
                )}
              </div>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbar={{
                  options: ["inline", "list"],
                }}
                placeholder="Tell us briefly of your achievements"
              />
              <div className="add_wrapper">
                <button type="submit">
                  <AddIcon sx={{ color: "#33343d9f" }} />
                  <p>Add</p>
                </button>
              </div>
              <div className="btn">
                <button
                  className="back"
                  type="button"
                  onClick={() => navigate("/dashboard/competence")}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard/education")}
                >
                  Save and continue
                </button>
              </div>
            </form>
          )}
        </Formik>
      ) : null}
    </div>
  );
}
