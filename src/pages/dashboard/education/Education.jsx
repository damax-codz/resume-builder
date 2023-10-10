import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { addEducation } from "../../../redux/resumeSlice";
import ResumePreview from "../../../components/dialog/ResumePreview";

export default function Education() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(true);
  const [OpenPreview, setOpenPreview] = useState(false);

  const resumeData = useSelector((state) => state.resume.resumeData);

  const schema = Yup.object().shape({
    institution: Yup.string().required("This field is required !"),
    degree: Yup.string().required("This field is required !"),
  });

  function togglePreview() {
    setOpenPreview(!OpenPreview);
  }

  useEffect(() => {
    // console.log(resumeData);
  }, []);

  return (
    <>
      <div className="fill_wrapper">
        <Header
          title="Education:"
          description="Your Education History are prominently featured in the resume body,
      making it convenient for potential employers to know your degrees."
        />

        {resumeData.education.length > 0 ? (
          <div className="experience_wrapper">
            {resumeData.education.map((item, index) => {
              return (
                <div className="experiences" key={index}>
                  <p className="role"> {item.institution} </p>
                  <p className="description"> {item.degree} </p>
                </div>
              );
            })}

            <button className="add" onClick={() => setFormState(true)}>
              <AddIcon sx={{ color: "#000000a1" }} />
              <p>Add another Institution</p>
            </button>
            <div className="btn">
              <button
                className="back"
                type="button"
                onClick={() => navigate("/dashboard/experience")}
              >
                Back
              </button>
              <button type="button" onClick={() => togglePreview()}>
                Preview Resume
              </button>
            </div>
          </div>
        ) : null}

        {formState ? (
          <Formik
            initialValues={{
              institution: "",
              degree: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              resetForm();
              dispatch(addEducation(values));
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
                    id="institution"
                    name="institution"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.institution}
                    placeholder="Institution Name"
                  />
                  {touched.institution && errors.institution && (
                    <span className="error_message">{errors.institution}</span>
                  )}
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.degree}
                    placeholder="Degree"
                  />
                  {touched.degree && errors.degree && (
                    <span className="error_message">{errors.degree}</span>
                  )}
                </div>
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
                    onClick={() => navigate("/dashboard/experience")}
                  >
                    Back
                  </button>
                  <button type="button" onClick={() => togglePreview()}>
                    Preview Resume
                  </button>
                </div>
              </form>
            )}
          </Formik>
        ) : null}
      </div>
      <ResumePreview OpenPreview={OpenPreview} togglePreview={togglePreview} />
    </>
  );
}
