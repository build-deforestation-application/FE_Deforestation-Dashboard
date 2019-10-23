import React from "react";
import {Line} from "react-chartjs-2";

const state = {
  alias: {
    yearFrom: 2000,
    yearTo: 2009,
    coverage: [70, 80, 65, 60, 80, 40, 45, 90, 100, 80],
  },
}

const dateRange = () => {
  let years = []
  
  for (let i=state.alias.yearFrom; i<=state.alias.yearTo; i++) {
    years.push(i)
  }

  return years
}

console.log(dateRange())

const data = {
  labels: dateRange(),
  datasets: [
    {
      label: 'Test Data',
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
      data: state.alias.coverage
    }
  ],
}

const RightSidebar = props => {
  //state here?

  return (
    <div>
      <h3>{/*state.alias.name*/}</h3>

      <div>
        <span>Total Land</span>
        <span>{/*state.alias.area*/}</span>
      </div>

      <div>
        <span>Forest Gain</span>
        <span>{/*state.alias.gain*/}</span>
      </div>

      <div>
        <span>Forest Loss</span>
        <span>{/*state.alias.loss*/}</span>
      </div>

      <div>
        <span>Delta</span>
        <span>{/*state.alias.delta*/}</span>
      </div>

      <div>
        <Line data={data} />
      </div>
    </div>
  )
};

export default RightSidebar;
