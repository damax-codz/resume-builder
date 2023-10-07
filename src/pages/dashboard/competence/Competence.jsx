import React from "react";
import Header from "../../../components/header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import "./../style.scss";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

export default function Competence() {
  const navigate = useNavigate();
  const [competencies, setCompetencies] = useState([]);

  function removeItem(name) {
    const updatedItems = competencies.filter((item) => item !== name);
    setCompetencies(updatedItems);
  }
  return (
    <div className="fill_wrapper">
      <Header
        title="Key competence:"
        description="Your key competence are prominently featured in the resume body,
        making it convenient for potential employers to know you."
      />
      <Formik
        initialValues={{
          competence: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          setCompetencies([...competencies, values.competence]);
          resetForm();
        }}
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
            <div className="competence_wrapper">
              {competencies?.map((item, index) => {
                return (
                  <span className="wrapper_" key={index}>
                    <span className="key"> {item} </span>
                    <IconButton onClick={() => removeItem(item)}>
                      <ClearIcon
                        sx={{ color: "#0000009f", fontSize: "14px" }}
                      />
                    </IconButton>
                  </span>
                );
              })}
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                id="competence"
                name="competence"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.competence}
                placeholder="Job competence"
              />
              {touched.competence && errors.competence && (
                <span className="error_message">{errors.competence}</span>
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
                onClick={() => navigate("/dashboard/role")}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard/experience")}
              >
                Save and continue
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
