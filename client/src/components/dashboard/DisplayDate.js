import { useContext } from "react";
import HabitContext from "../../context/habit/habitContext";

const DisplayDate = () => {
  const { day, month, date } = useContext(HabitContext);
  
  return (
    <div className='fs-2 m-2 p-2'>{day}, {month} {date}</div>
  )
}

export default DisplayDate;