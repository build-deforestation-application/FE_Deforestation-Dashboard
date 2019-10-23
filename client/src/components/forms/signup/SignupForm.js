/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import axiosWithAuth from '../../../utils/axios';

const useStyles = makeStyles(theme => ({

  root: { // Doesn't seem to be active
    maxWidth: '250px',
    marginTop: theme.spacing(8),
    padding: theme.spacing(3,2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
    border: '1px solid black',
    MuiFormControl: {
      margin: theme.spacing(1),
    },
  },
  container: {
    // margin: 'theme-spacing',
    maxWidth: '250px',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContents: 'center',
    formControl: {
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
  },

  submitButton: {
    marginTop: '2rem',
    marginLeft: '3rem',
    display: 'flex',
    alignSelf: 'center',
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

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert("Submitting the form!"); // REMOVE ME!
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
    <Paper className={classes.root}>
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
          >Register</Button>
      </form>
    </Paper>
  );
};

export default SignUpForm;
