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
    borderRight: '1px solid black',
    height: '100vh',
    width: '20rem',
    marginLeft: '0',
    marginTop: '0',
    position: 'fixed',
  },
  formControl: {
    minWidth: 140,
  },
}));

const LeftSidebar = ({ data, setTemp }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    country: '',
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTemp(values);
  };

  console.log(data);
  return (
    <div className="outerContainer">
      <h2>Welcome, User</h2>
      <h3>Search:</h3>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country-simple">Country</InputLabel>
          <Select
            value={values.country}
            onChange={handleChange}
            inputProps={{
              name: 'country',
              id: 'country-simple',
            }}
          >
            {data.map(item => {
              return <MenuItem value={item.Country}>{item.Country}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeftSidebar;
