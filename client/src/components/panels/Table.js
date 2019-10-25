import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ControlsContext from '../../contexts/ControlsContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { post } from '../../services/queryBackend';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  country: {
    color: '#91C237',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

export default ({ country, code, year }) => {
  // year = array of tuples
  // country & code = values
  const { history, setHistory } = useContext(ControlsContext);
  const [storedValue, setValue] = useLocalStorage('storage');
  const classes = useStyles();

  const onClick = e => {
    setHistory([...history, code]);
    setValue([...history, code]);
    console.log('SV', storedValue);

    // logic for saving favorite areas
    // post()
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
  };

  return (
    <ControlsContext.Consumer>
      {() => {
        return (
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <div className={classes.country}>
                {country} ({code})
              </div>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    {year.map(year => {
                      return <TableCell align="center">{year[0]}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {year.map(year => {
                      return (
                        <TableCell align="center">
                          {Math.round(year[1]).toLocaleString()}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <button onClick={onClick}>Favorite</button>
          </div>
        );
      }}
    </ControlsContext.Consumer>
  );
};
