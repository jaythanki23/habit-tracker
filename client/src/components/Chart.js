import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


const Chart = ({ durationObj, name, }) => {

  // let start = date.lastIndexOf(firstDay);
  // let end = date.lastIndexOf(date.length - 1);

  // const x = duratio
  // const y = duration.slice(start);

  // let i = start;
  // let diff = 0;
  // while(i < date.length) {
  //   if(date[i+1] - date[i] > 1) {
      
  //   }
  // }

  // let diff = date[date.length - 1] - firstDay;

  // const y = duration.slice(start);
  
  // const zeros = new Array(diff-1).fill(0);


  // let i = 1;
  // while(i < diff) {
  //   y.splice(i, 0, 0);
  //   i++;
  // }

  const x = Object.keys(durationObj);
  const y = Object.values(durationObj);


  return (
    <div>
      {/* <div className='fs-4'>{name}</div> */}
      <Plot data={[
        {
          x,
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