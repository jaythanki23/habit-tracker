import { React, useState, useContext } from 'react'
import HabitContext from '../../context/habit/habitContext';
import Habit from './Habit';

const DashboardHabits = () => {
  const [text, setText] = useState('');

  const { userHabits, postHabit, date } = useContext(HabitContext);

  // const myHabits = habits.filter(habit => habit.status === true);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = (e) => {
    postHabit(text);
    setText('');
  }

  return (
    <div className='m-4 p-4'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Habit</th>
            <th scope='col'>Completion</th>
            <th scope='col'>Duration (in mins)</th>
          </tr>
        </thead>
        <tbody>
          {userHabits.filter(habit => habit.date[habit.date.length - 1] !== date).map(habit => <Habit key={habit._id} id={habit._id} name={habit.name} />)}
        </tbody>
      </table>
      <div className='d-flex justify-content-center align-items-center m-5 p-5' style={{'height': '100px'}}>
        <form className="row g-2">
          {/* <div className="col-auto"> */}
            {/* <label htmlFor="pt" className="fs-3">Create your own:</label> */}
            {/* <input type="text" readonly className="form-control-plaintext" id="pt" value="Add a method" /> */}
          {/* </div> */}
          <div className="col-auto mx-2">
            {/* <label for="habitInput" className="visually-hidden">Habit</label> */}
            <input type="text" className="form-control" value={text} onChange={onChange} placeholder='Add a habit' />
          </div>
          <div className="col-auto mx-2">
            <button type="button" className="btn btn-primary mb-3" onClick={onClick}>Add</button>
          </div>
        </form>
    </div>
      </div>
  )
}

export default DashboardHabits