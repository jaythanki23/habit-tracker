import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


const Chart = ({ durationObj, name, }) => {

  const x = Object.keys(durationObj);
  const y = Object.values(durationObj);


  return (
    <div>
      {/* <div className='fs-4'>{name}</div> */}
      <Plot data={[
        {
          x,
          y,
          type: 'bar',
          marker: {color: 'rgb(55, 83, 109)'},
          // font: {
          //   color: 'forestgreen'
          // } 
        }
        ]}
        layout={
                { 
                  title: {
                    text: name,
                    font: {
                      size: 24
                    }
                  }, 
                  titlefont: {
                    size: 16,
                    color: 'rgb(107, 107, 107)'
                  },
                  paper_bgcolor: 'rgba(245,246,249,1)',
                  plot_bgcolor: 'rgba(245,246,249,1)',
                  width: 700,
                  height: 400,
                  yaxis: {
                    title: 'mins',
                    titlefont: {
                      size: 16,
                      color: 'rgb(107, 107, 107)'
                    },
                  }
                } 
              }
      />
      <hr className='mb-2' />
    </div>
  )
}

export default Chart;