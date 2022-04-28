import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


const Chart = ({ duration, date, name, firstDay }) => {

  let start = date.lastIndexOf(firstDay);
  // let end = date.lastIndexOf(date.length - 1);

  let diff = date[date.length - 1] - firstDay;

  const y = duration.slice(start);
  
  // const zeros = new Array(diff-1).fill(0);

  let i = 1;
  while(i < diff) {
    y.splice(i, 0, 0);
    i++;
  }



  return (
    <div>
      {/* <div className='fs-4'>{name}</div> */}
      <Plot data={[
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y,
          type: 'bar'
        }
        ]}
        layout={{ title: name }} 
      />
      <hr className='mb-2' />
    </div>
  )
}

export default Chart;