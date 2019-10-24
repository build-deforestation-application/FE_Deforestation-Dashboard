/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import ErrorIcon from '@material-ui/icons/Error';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import axiosWithAuth from '../../../utils/axios';

const variantIcon = {
  error: ErrorIcon,
};

const useStyles = makeStyles(theme => ({
  myCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    width: '350px',
  },

  formControl: {
    margin: theme.spacing(2),
  },

  loginFormContainer: {
    height: '100vh',
    width: '100vw',
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
 
  error: {
    backgroundColor: theme.palette.error.dark,
    width: '20px',
  },

  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    marginTop: '10px',
    marginLeft: '10px',
    boxSizing: 'border-box',
    marginRight: '100px',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className,)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
}

const LoginForm = () => {
  const classes = useStyles();
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [values, setValues] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
    },
  });

  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      values.errors.email = 'Enter a valid email address';
    } else {
      values.errors.email = '';
    }
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
      })
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
            value={values.email}
            name="email"
            onChange={handleChange('email')}
            labelWidth={labelWidth}
          />
          {values.errors.email && (
            <MySnackbarContentWrapper
              variant="error"
              className={classes.margin}
              message={values.errors.email}
            />
          )}
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Password
          </InputLabel>

          <OutlinedInput
            id="component-outlined-password-input"
            value={values.password || ''}
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
