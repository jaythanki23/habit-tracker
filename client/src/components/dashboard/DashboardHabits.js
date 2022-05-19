import { React, useState, useContext } from 'react'
import HabitContext from '../../context/habit/habitContext';
import AuthContext from '../../context/auth/authContext';
import Habit from './Habit';
import Spinner from '../layout/Spinner';

const DashboardHabits = () => {
  const [text, setText] = useState('');

  const { userHabits, weekHabits, postHabit, day, setError, error } = useContext(HabitContext);
  const { loading } = useContext(AuthContext);

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

  // filter(habit => habit.date[habit.date.length - 1] !== date)
  const habits = weekHabits.filter(habit => {
    if(habit.hasOwnProperty('dayDuration')) {
      return habit.dayDuration[`${day}`] === 0;
    } else {
      return habit;
    }
  }).map(habit => <Habit key={habit._id} weekid={habit.habit} id={habit._id} name={habit.name} />)


  // const habits = userHabits.map(habit => <Habit key={habit._id} id={habit._id} name={habit.name} />);


  return (
    <>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      
        {!loading ? habits.length === 0 ? <div className='fs-2 align-middle text-center m-5 p-5 border border-light' style={{"backgroundColor": "#f9f8f4"}}>You are all done for today!</div> : 
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
        : <Spinner />}
    </>
  )
}

export default DashboardHabits