import React from 'react'

const TodayDate = () => {
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
    <div className='f2 ma1'>{day}, {month} {date}</div>
  )
}

export default TodayDate