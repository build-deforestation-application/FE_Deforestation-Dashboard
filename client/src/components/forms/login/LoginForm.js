/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import axiosWithAuth from '../../../utils/axios';

const useStyles = makeStyles(theme => ({
  myCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    width: '250px',
  },

  formControl: {
    margin: theme.spacing(2),
  },

  loginFormContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  myButton: {
    marginTop: theme.spacing(8),
    backgroundColor: `#4981CE`,
    color: `white`,
    '&:hover': {
      backgroundColor: '#3068B5',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/auth/login', {
        email: values.email,
        password: values.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data);
        // push to private route
      });
  };

  return (
    <div className="loginFormContainer">
      <Card className={classes.myCard}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Email
          </InputLabel>

          <OutlinedInput
            id="component-outlined-email-input"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            labelWidth={labelWidth}
          />
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Password
          </InputLabel>

          <OutlinedInput
            id="component-outlined-password-input"
            value={values.password}
            onChange={handleChange('password')}
            labelWidth={labelWidth}
            type="password"
          />
        </FormControl>

        <form className={classes.buttonContainer} onSubmit={handleSubmit}>
          <Button
            variant="contained"
            className={classes.myButton}
            type="submit"
          >
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
