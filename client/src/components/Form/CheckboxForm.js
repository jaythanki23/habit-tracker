import { React, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import HabitContext from '../../context/habit/habitContext';
import Checkboxes from './Checkboxes';

const CheckboxForm = () => {  
  const [text, setText] = useState('');
  const { habits, addHabit, postHabit, error, setError } = useContext(HabitContext);

  const navigate = useNavigate();

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    let flag = false;
    for(let i = 0; i < habits.length; i++) {
      if(habits[i].name.toLowerCase() === text.toLowerCase()) {
        flag = true;
        setError("The habit already exists");
        break;
      }
    }
    if(!flag) {
    addHabit(text);
    }
    setText('');
  }

  const onSubmit = () => {
    postHabit();
    navigate('/');
  }

  return (
    <>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                    {error}
                  </div>
        }
      <div className='d-flex flex-column justify-content-center align-items-center w-100 gap-5'>
        {/* style={{"min-height": "100vh"}} */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-5 mt-5 p-5 border border-light rounded-3 shadow-sm bg-white">
          <h2 className='fs-2'>Select the habits you want to build</h2>
          <div className='d-flex flex-row justify-content-center align-items-center flex-wrap gap-2'>
            {habits.map(habit => <Checkboxes key={habit.name} name={habit.name} status={habit.status} />)}
          </div>
          <div className='fs-2 mt-2 pt-2'>Or...</div>
          <form className="row g-2">
            <div className="col-auto">
              <label htmlFor="pt" className="fs-3">Create your own:</label>
              {/* <input type="text" readonly className="form-control-plaintext" id="pt" value="Create your own:" /> */}
            </div>
            <div className="col-auto mx-2">
              {/* <label for="habitInput" className="visually-hidden">Habit</label> */}
              <input type="text" className="form-control" value={text} onChange={onChange} />
            </div>
            <div className="col-auto mx-2">
              <button type="submit" className="btn btn-primary mb-3" onClick={onClick}>Add</button>
            </div>
          </form>
        </div> 
        <button type='button' className='btn btn-success' onClick={onSubmit}><i class="bi bi-arrow-right"></i></button>
      </div>
    </>      
  )
}

export default CheckboxForm