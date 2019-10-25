import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.country}>{country} ({code})</div>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {year.map(year => {
                return <TableCell align="center">{year[0]}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {year.map(year => {
                return <TableCell align="center">{Math.round(year[1]).toLocaleString()}</TableCell>
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
