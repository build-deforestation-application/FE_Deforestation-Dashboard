import React, { useState, useEffect, useContext } from 'react';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ControlsContext from '../../contexts/ControlsContext';

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

const Search = () => {
  const { data, temp, setTemp } = useContext(ControlsContext);

  const classes = useStyles();
  const [values, setValues] = useState({
    country: '',
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTemp(values);
  };

  return (
    <ControlsContext.Consumer>
      {() => {
        return (
          <div className="outerContainer">
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
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
                    return (
                      <MenuItem value={item.Country}>{item.Country}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }}
    </ControlsContext.Consumer>
  );
};

export default Search;
