/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

// ============== Styling ===============

const FormContainer = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);

  max-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  line-height: 2rem;

  label {
    display: block;
  }

  .error {
    color: red;
    margin-top: -0.5rem;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

// ============== General Form =================

const SignupForm = () => {
  const classes = useStyles();
  const [uiValues, setUiValues] = useState({
    name: '',
  });

  const handleChange = prop => event => {
    setUiValues({ ...uiValues, [prop]: event.target.uiValue });
  };

  return (
    <FormContainer>
      <form>
        <h2>Signup!</h2>
        <Button type="button" color="primary">Primary</Button>
        <TextField // ----------- Name --------------
          id="outlined-adornment-name"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="name"
          value={uiValues.name}
          onChange={handleChange('name')}
          helperText="Name"
          InputProps={{
            endAdornment: <InputAdornment position="end">Bob</InputAdornment>,
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-helper">Real Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>

        <TextField // ----------- Email --------------
          id="outlined-adornment-email"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="email"
          value={uiValues.email}
          onChange={handleChange('email')}
          helperText="Email"
          InputProps={{
            endAdornment: <InputAdornment position="end">this@that.com</InputAdornment>,
          }}
        />
        <TextField // ----------- Password -------------
          id="outlined-adornment-password"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="password"
          value={uiValues.password}
          onChange={handleChange('password')}
          helperText="Password"
          InputProps={{
            endAdornment: <InputAdornment position="end">Password</InputAdornment>,
          }}
        />
        <TextField // ----------- location --------------
          id="outlined-adornment-location"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="location"
          value={uiValues.name}
          onChange={handleChange('location')}
          helperText="Location"
          InputProps={{
            endAdornment: <InputAdornment position="end">Location</InputAdornment>,
          }}
        />

        <button type="submit">Submit!</button>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
