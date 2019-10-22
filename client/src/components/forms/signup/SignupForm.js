/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../../utils/axios';

const SignUpForm = ({ values, touched, errors }) => {
  return (
    <div>
      <h2>Register</h2>
      <Form className="signin-form">
        <Field type="text" name="userName" placeholder="Enter your name" />
        <Field type="email" name="email" placeholder="Enter your Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field
          type="password"
          name="password"
          placeholder="Choose your password"
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ userName, email, password }) {
    return {
      userName: userName || '',
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('You must enter an email address.'),
    password: Yup.string()
      .required('You must enter a valid password')
      .min(8, 'Your password must be no less than 8 characters long')
      .max(20, 'Your password must be no more than 20 characters long'),
  }),
  handleSubmit(values, { props }) {
    // props for history
    console.log(props);
    axiosWithAuth()
      .post('/auth/register', {
        userName: values.userName,
        password: values.password,
        email: values.email,
      })
      .then(res => {
        console.log('response', res);
      })
      .catch(err => {
        console.error('error', err);
      });
  },
})(SignUpForm);

export default FormikSignUpForm;
