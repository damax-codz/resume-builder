import React from "react";
import Header from "../../../components/header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import "./../style.scss";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const schema = Yup.object().shape({
    firstname: Yup.string().required("This field is required !"),
    lastname: Yup.string().required("This field is required !"),
    email: Yup.string()
      .required("This field is required !")
      .email("invalid email !"),
    tel: Yup.string().required("This field is required !"),
    address: Yup.string().required("This field is required !"),
  });
  const navigate = useNavigate();
  return (
    <div className="fill_wrapper">
      <Header
        title="Contact Information:"
        description=" Your contact details are prominently featured in the resume header,
        making it convenient for potential employers to contact you."
      />
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          tel: "",
          address: "",
        }}
        onSubmit={async (values) => {
          navigate("/dashboard/role");
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
            <div className="names">
              <div className="input_wrapper">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  value={values.firstname}
                  placeholder="Firstname"
                />
                {touched.firstname && errors.firstname && (
                  <span className="error_message">{errors.firstname}</span>
                )}
              </div>
              <div className="input_wrapper">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  value={values.lastname}
                  placeholder="Lastname"
                />
                {touched.lastname && errors.lastname && (
                  <span className="error_message">{errors.lastname}</span>
                )}
              </div>
            </div>
            <div className="input_wrapper">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <span className="error_message">{errors.email}</span>
              )}
            </div>
            <div className="input_wrapper">
              <input
                type="tel"
                id="tel"
                name="tel"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.tel}
                placeholder="Phone"
              />
              {touched.tel && errors.tel && (
                <span className="error_message">{errors.tel}</span>
              )}
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Address"
              />
              {touched.address && errors.address && (
                <span className="error_message">{errors.address}</span>
              )}
            </div>
            <div className="btn">
              <button>Save and continue</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
