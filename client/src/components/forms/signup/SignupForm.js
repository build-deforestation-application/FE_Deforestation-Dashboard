/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axiosWithAuth from '../../../utils/axios';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
  },
  container: {
    maxWidth: '200px',
  },
  submitButton: {
    marginTop: '2rem',
    marginLeft: '3rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SignUpForm = ({ values, touched, errors }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Register</h2>
      <Form className="signin-form container">
        
        <TextField
          type="text"
          name="userName"
          label="User Name"
          placeholder="Enter a user name"
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email" >
        {touched.email && errors.email && <p>{errors.email}</p>}
        </TextField>

        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Choose your password"
        >
        {touched.password && errors.password && <p>{errors.password}</p>}
        </TextField>

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="12345"
          type="password"
        >
        {touched.password && errors.password && <p>{errors.password}</p>}
        </TextField>

        <Button
          variant="contained"
          type="submit"
          className={classes.submitButton}
          >Submit</Button>
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

    userName: Yup.string()
      .required('A user name is required to register.')
      .min(3, 'Please choose a longer user name.'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('You must enter an email address.'),
    password: Yup.string()
      .required('You must enter a valid password')
      .min(8, 'Your password must be at least 8 characters long'),
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
