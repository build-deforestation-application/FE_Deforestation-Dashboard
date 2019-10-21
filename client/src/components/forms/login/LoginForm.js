/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik, Form, Field } from 'formik';

const Login = ({ values, errors, touched }) => {
  return (
    <Form>
      <div>
        <Field type="text" name="Email" placeholder="Email" />
      </div>

      <div>
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <button type="submit">Log In</button>
    </Form>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },

  handleSubmit(values) {
    // do stuff with values
  },
})(Login);

export default LoginForm;
