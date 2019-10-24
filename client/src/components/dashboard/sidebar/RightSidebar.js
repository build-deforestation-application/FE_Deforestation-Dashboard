import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
  const [filteredData, setFilteredData] = useState([]);

  const pointlessArray = [1, 2, 3, 4];
  const classes = useStyles();

  useEffect(() => {
    setFilteredData(
      props.countryData.filter(el => Object.values(el).includes(props.year)),
    );
  }, [props.country, props.year]);

  const data = {
    labels: [filteredData.year],
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
        data: filteredData.coverage,
      },
    ],
  };

  return (
    <Box component="div" className={classes.containerOuter}>
      <Box component="div" className={classes.containerInner}>
        <Typography variant="h4" className={classes.dataTitle}>
          {props.country}
        </Typography>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Total Land</Typography>
          <Typography className={classes.dataSpan}>
            {filteredData.totalLand}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Forest Gain</Typography>
          <Typography className={classes.dataSpan}>
            {filteredData.gain}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Forest Loss</Typography>
          <Typography className={classes.dataSpan}>
            {filteredData.loss}
          </Typography>
        </Box>

        <Box component="div" className={classes.dataElement}>
          <Typography className={classes.dataSpan}>Delta</Typography>
          <Typography className={clsx(classes.dataSpan, classes.delta)}>
            {filteredData.delta}
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
