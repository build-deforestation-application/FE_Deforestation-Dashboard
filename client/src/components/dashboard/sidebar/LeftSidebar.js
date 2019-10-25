import React, { useState, useEffect } from 'react';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  outerContainer: {
    border: '4px solid hotpink',
    height: '100vh',
    width: '10rem',
    marginLeft: '0',
    marginTop: '0',
    position: 'fixed',
  },
  formControl: {
    minWidth: '220',
    background: 'color: red'
  },
}));

const LeftSidebar = props => {
  const classes = useStyles();
  const [values, setValues] = useState({
    country: 'CAN',
    year: '2011',
  });
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="outerContainer">
      <h2>This is the left sidebar</h2>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country-simple">Country</InputLabel>
          <Select
            placeholder={"USA"}
            value={values.country}
            onChange={handleChange}
            inputProps={{
              name: 'country',
              id: 'country-simple',
            }}
          >
            <MenuItem value="USA">United States</MenuItem>
            <MenuItem value="CAN">Canada</MenuItem>
            <MenuItem value="MEX">Mexico</MenuItem>
          </Select>
        </FormControl>
        <hr />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="year-simple">Country</InputLabel>
          <Select
            value={values.year}
            onChange={handleChange}
            inputProps={{
              name: 'year',
              id: 'year-simple',
            }}
          >
            <MenuItem value="2010">2010</MenuItem>
            <MenuItem value="2011">2011</MenuItem>
            <MenuItem value="2012">2012</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
};

export default LeftSidebar;