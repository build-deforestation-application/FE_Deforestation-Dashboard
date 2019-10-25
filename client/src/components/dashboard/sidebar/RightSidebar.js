import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dataTitle: {
    fontFamily: '"Lato", sans-serif',
    color: '#91C237',
    marginBottom: '4%',
  },

  containerInner: {
    height: '30%',
    margin: '5%',
    boxSizing: 'border-box',
  },

  containerOuter: {
    // border: '1px solid black',
    height: '800 px',
    width: '35%',
  },

  dataElement: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },

  dataSpan: {
    fontSize: '25px',
  },

  delta: {
    color: '#91C237',
    marginBottom: '10%',
  },
}));

const RightSidebar = props => {
  // const [alias, setAlias] = useState({})
  // const [data, setData] = useState(props.data)
  // useEffect(() => {
  //
  // },[])

  const pointlessArray = [1, 2, 3, 4];
  const classes = useStyles();

  const state = {
    alias: {
      name: 'United States',
      yearFrom: 2000,
      yearTo: 2009,
      coverage: [70, 80, 65, 60, 80, 40, 45, 90, 100, 80],
      area: '100,000,000',
      gain: '90,000,000',
      loss: '10,000,000',
      delta: '7.9%',
    },
  };

  const dateRange = () => {
    const years = [];

    for (let i = state.alias.yearFrom; i <= state.alias.yearTo; i++) {
      years.push(i);
    }

    return years;
  };

  const data = {
    labels: dateRange(),
    datasets: [
      {
        label: 'Tree coverage',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: state.alias.coverage,
      },
    ],
  };

  return (
    <Box component="div" className={classes.containerOuter}>
      <Box component="div" className={classes.containerInner}>
        <Typography variant="h4" className={classes.dataTitle}>
          {state.alias.name}
        </Typography>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Total Land</Typography>
          <Typography className={classes.dataSpan}>
            {state.alias.area}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Forest Gain</Typography>
          <Typography className={classes.dataSpan}>
            {state.alias.gain}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Forest Loss</Typography>
          <Typography className={classes.dataSpan}>
            {state.alias.loss}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Delta</Typography>
          <Typography className={clsx(classes.dataSpan, classes.delta)}>
            {state.alias.delta}
          </Typography>
        </Box>

        <Box component="div">
          <Line data={data} />
        </Box>
        {pointlessArray.map(el => (
          <span />
        ))}
      </Box>
    </Box>
  );
};

export default RightSidebar;
