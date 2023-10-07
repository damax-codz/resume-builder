import React from "react";
import Header from "../../../components/header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import "./../style.scss";
import { useNavigate } from "react-router-dom";

export default function Role() {
  const schema = Yup.object().shape({
    role: Yup.string().required("This field is required !"),
    description: Yup.string().required("This field is required !"),
  });
  const navigate = useNavigate();
  return (
    <div className="fill_wrapper">
      <Header
        title="Job Role:"
        description="Your job role are prominently featured in the resume body,
        making it convenient for potential employers to know your field."
      />
      <Formik
        initialValues={{
          role: "",
          description: "",
        }}
        onSubmit={async (values) => {
          navigate("/dashboard/competence");
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
                id="role"
                name="role"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.role}
                placeholder="Job role"
              />
              {touched.role && errors.role && (
                <span className="error_message">{errors.role}</span>
              )}
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
                placeholder="Provide a concise overview of your professional position."
              />
              {touched.description && errors.description && (
                <span className="error_message">{errors.description}</span>
              )}
            </div>
            <div className="btn">
              <button
                className="back"
                type="button"
                onClick={() => navigate("/dashboard/contact")}
              >
                Back
              </button>
              <button type="submit">Save and continue</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
