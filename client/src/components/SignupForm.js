import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// ============== General Form =================

const SignupForm = ({ values, touched, errors, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="formContainer">
      <h2>Signup!</h2>

      <Form>
        <label>
          Name:
          <Field type="text" name="name" placeholder="Smokey the Bear" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>

        <label>
          Email:
          <Field type="text" name="email" placeholder="this@that.com" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </label>

        <label>
          Password:
          <Field type="password" name="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>

        <label>
          Confirm password:
          <Field type="password" name="passwordConf" />
          {touched.passwordConf && errors.passwordConf && (
            <p className="error">{errors.passwordConf}</p>
          )}
        </label>

        <label>
          Position:
          <Field className="dropdown" component="select" name="position">
            <option>North America</option>
            <option>Brazil</option>
            <option>Southeast Asia</option>
            <option>Cascadia</option>
            <option>California</option>
            <option>Tanzania</option>
          </Field>
          {touched.position && errors.position && (
            <p className="error">{errors.position}</p>
          )}
        </label>

        <label>
          Terms of Service
          <Field type="checkbox" name="tos" checked={values.tos} />
          {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
        </label>

        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};

// ============== Formik Form ===============

const FormikSignupForm = withFormik({
  //-------- Map Values -----------
  mapPropsToValues({ name, email, password, position, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      position: position || '',
      tos: tos || false,
    };
  },

  //------- Validate Form --------
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Name is required.')
      .min(2, 'Your name is too short')
      .max(50, 'Your name is too long'),

    email: Yup.string()
      .required('Email is required.')
      .email('Invalid email address.'),

    password: Yup.string()
      .required('You must choose a password')
      .min(9, 'Your password is too short.')
      .matches(
        '/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm',
        'Password must contain upper & lower case, plus numerals.',
      ),

    passwordConf: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),

    // region: Yup.string()
    // Not required

    tos: Yup.boolean().test(
      'is-true',
      'You must agree to the terms to continue',
      value => value === true,
    ),
  }),

  //-------- Submit form ----------
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post('https://reqres.in/api/users/', values) // Temporary
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  },
})(SignupForm);

export default FormikSignupForm;
