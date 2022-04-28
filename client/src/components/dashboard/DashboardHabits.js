import { React, useState, useContext } from 'react'
import HabitContext from '../../context/habit/habitContext';
import Habit from './Habit';

const DashboardHabits = () => {
  const [text, setText] = useState('');

  const { userHabits, postHabit, date, setError, error } = useContext(HabitContext);

  // const myHabits = habits.filter(habit => habit.status === true);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = (e) => {
    let flag = false;
    for(let i = 0; i < userHabits.length; i++) {
      if(userHabits[i].name.toLowerCase() === text.toLowerCase()) {
        flag = true;
        setError("The habit already exists");
        break;
      }
    }
    if(!flag) {
      postHabit(text);
    }
    setText('');
  }

  const habits = userHabits.filter(habit => habit.date[habit.date.length - 1] !== date).map(habit => <Habit key={habit._id} id={habit._id} name={habit.name} />)

  return (
    <>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      
        {habits.length === 0 ? <div className='fs-2 text-center m-5 p-5'>You are all done for today!</div> : 
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
                {habits}
              </tbody>
            </table>
            <div className='d-flex justify-content-center align-items-center m-5 p-5' style={{'height': '100px'}}>
              <form className="row g-2">
                <div className="col-auto mx-2">
                  <input type="text" className="form-control" value={text} onChange={onChange} placeholder='Add a habit' />
                </div>
                <div className="col-auto mx-2">
                  <button type="button" className="btn btn-primary mb-3" onClick={onClick}>Add</button>
                </div>
              </form>
            </div>
          </div>
        }
    </>
  )
}

export default DashboardHabits