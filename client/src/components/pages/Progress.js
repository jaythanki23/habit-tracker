import React, { useContext } from 'react';
// import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';

const Plot = createPlotlyComponent(Plotly);

const Progress = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { date, day, month, months } = useContext(HabitContext);

  const curr = new Date();

  let firstDay = (curr.getDate() - curr.getDay()) + 1;

  let lastDay = firstDay + 6;

  let currMonth  = curr.getMonth();

  // if((currMonth + 1) % 2 === 0) {

  // }


  return (
    isAuthenticated ? (
      <div className='container border border-dark mt-5 p-3 w-auto vh-100'>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5 border border-dark'>
          <div className='fs-1'>{month} {firstDay} - {month} {firstDay + 6}</div>
          <div>
            <Plot data={[
              {
                x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                y: [20, 30, 0, 50, 20, 35, 0],
                type: 'bar'
              }
              ]}
              layout={{ title: 'My first plot' }} 
            />
          </div>
        </div>
      </div>
    ) : (<h1>Please Login first</h1>)
  );
}

export default Progress