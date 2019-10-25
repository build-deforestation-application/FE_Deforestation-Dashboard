/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import axiosWithAuth from '../../../utils/axios';

// ------------------ Styling --------------------

const useStyles = makeStyles(theme => ({ // TODO: CLEAN UP STYLING

  signupCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    aligItems: 'center',
    height: '400px',
    width: '250px',
    paddingLeft: '2rem',
  },

  formControl: {
    margin: theme.spacing(2),
  },

  root: {
    maxWidth: '250px',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
    border: '1px solid black',
    MuiFormControl: {
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submitButton: {
    marginTop: '2rem',
    marginLeft: '3rem',
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#7BAD2C',
    color: 'white',
  },
}));

// ------------ Form Validation --------------

const validate = vals => {
  let errs = {};

  if (vals.userName === '')
    errs.userName = 'Username is required';
  if (vals.email === '')
    errs.email = 'Email is required';
  if (vals.password.length === 0)
    errs.password = 'Password is required';
  else if (vals.password.length < 8)
    errs.password = 'Minimum 8 chars';
  if (vals.confirmPassword !== vals.password)
    errs.confirmPassword = "Passwords don't match";
  return errs;
}

// --------------- Signup Form ----------------
const SignUpForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // ---- Submit Form ----
  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    if (Object.values(errors).length > 0) {
      console.log('Fields failing validation:', Object.values(errors).length);
      console.log(errors);
      return;
    }
    // No errors. Continue posting.
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

  // ---- Form Contents ----
  return (
    <Card className={classes.signupCard}>
      <form onSubmit={handleSubmit}>

        <TextField
          type="text"
          id="userName"
          name="userName"
          label="User Name"
          placeholder="Enter a user name"
          value={values.userName}
          helperText={errors.userName}
          onChange={handleChange('userName')}
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          helperText={errors.email}
          onChange={handleChange('email')}
        />

        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Choose your password"
          value={values.password}
          helperText={errors.password}
          onChange={handleChange('password')}
        />

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="12345"
          type="password"
          value={values.confirmPassword}
          helperText={errors.confirmPassword}
          onChange={handleChange('confirmPassword')}
        />

        <Button
          variant="contained"
          type="submit"
          className={classes.submitButton}
        >Register</Button>
      </form>
    </Card>
  );
};

export default SignUpForm;