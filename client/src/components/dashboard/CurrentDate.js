import React from 'react'

const CurrentDate = () => {
  // Get date
  const d = new Date();
  
  // Get Day
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = weekday[d.getDay()];

  // Get Month
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const month = months[d.getMonth()];

  // Get Day of the month
  const date = d.getDate();

  return (
    <div className='fs-2 m-2 p-2'>{day}, {month} {date}</div>
  )
}

export default CurrentDate;