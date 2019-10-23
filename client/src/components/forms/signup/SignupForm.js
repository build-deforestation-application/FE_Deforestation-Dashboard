/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
// import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import axiosWithAuth from '../../../utils/axios';

const useStyles = makeStyles(theme => ({

  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
  },
  container: {
    margin: 'theme-spacing',
    maxWidth: '600px',
    // padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContents: 'center',

  },

  submitButton: {
    marginTop: '2rem',
    marginLeft: '3rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const labelRef = useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // useEffect(() => {
  //   setLabelWidth(labelRef.current.offsetWidth);
  // }, []);

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    // props for history
    // console.log(props);
    alert("Submitting the form!");
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
  };


  return (
    <div className={classes.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        
        <TextField
          type="text"
          id="userName"
          name="userName"
          label="User Name"
          placeholder="Enter a user name"
          value={values.userName}
          onChange={handleChange('userName')}
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange('email')}
        >
        {/* touched.email && errors.email && <p>{errors.email}</p> */}
        Blank
        </TextField>

        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Choose your password"
          value={values.password}
          onChange={handleChange('password')}
        >
        {/*touched.password && errors.password && <p>{errors.password}</p> */}
        Blank again
        </TextField>

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="12345"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
        >
        {/*touched.confirmPassword &&
         errors.confirmPassword && <p>{errors.confirmPassword}</p> */}
         More Blank
        </TextField>

        <Button
          variant="contained"
          type="submit"
          className={classes.submitButton}
          >Submit</Button>
      </form>
    </div>
  );
};

/*****************************************
const FormikSignUpForm = withFormik({
  mapPropsToValues({ userName, email, password, confirmPassword }) {
    console.log("Formik Props:",userName, email, password, confirmPassword);
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
    alert("Submitting the form!");
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
************************************/
export default SignUpForm;
