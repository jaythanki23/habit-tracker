import { React, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import HabitContext from '../../context/habitContext';
import Checkboxes from './Checkboxes';

const CheckboxForm = () => {  
  const [text, setText] = useState('');
  const { habits, addHabit } = useContext(HabitContext);

  const navigate = useNavigate();

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    addHabit(text);
    setText('');
  }

  const onSubmit = () => {
    navigate('/dashboard');
  }

  return (
    <div className='align-items-center'>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 m-3 p-5 ">
        <h2>Select the habits you want to build</h2>
        <div className='d-flex flex-row justify-content-center align-items-center flex-wrap gap-2'>
          {habits.map(habit => <Checkboxes key={habit.name} name={habit.name} status={habit.status} />)}
        </div>
        <div className='fs-2 mt-2 pt-2'>Or...</div>
        {/* <button className='fr pa3 bw1 b--solid br2 grow bg-white' onClick={onSubmit}><i class="fa-solid fa-chevron-right"></i></button> */}
        {/* <form>
          <div className='f3 b' style={{'color': '#888'}}>Create your own</div>
          <input className='dib' type='text' name='create' value={text} onChange={onChange} id='input'/>
          <button type='submit' className='ma2 pa2 w3 bg-green bn grow' onClick={onClick}>
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
          {text && <div>{text}</div> }
        </form> */}
        <form className="row g-2">
          <div className="col-auto">
            <label htmlFor="pt" className="fs-4">Create your own:</label>
            {/* <input type="text" readonly className="form-control-plaintext" id="pt" value="Create your own:" /> */}
          </div>
          <div className="col-auto mx-2">
            {/* <label for="habitInput" className="visually-hidden">Habit</label> */}
            <input type="text" className="form-control" value={text} onChange={onChange} />
          </div>
          <div className="col-auto mx-2">
            <button type="submit" className="btn btn-primary mb-3" onClick={onClick}>Submit</button>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default CheckboxForm