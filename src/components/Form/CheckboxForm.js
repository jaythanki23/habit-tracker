import { React, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import HabitContext from '../../context/habitContext';
import Checkboxes from './Checkboxes';
import './CheckboxForm.css';

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
    <div >
      <div className="container">
        <h2>Select the habits you want to build</h2>
        <div className="list">
          {habits.map(habit => <Checkboxes key={habit.name} name={habit.name} status={habit.status} />)}
        </div>
        <div className='f3 b pa3 ma3' style={{'color': '#888'}}>Or...</div>
      </div> 
      <button className='fr pa3 bw1 b--solid br2 grow bg-white' onClick={onSubmit}><i class="fa-solid fa-chevron-right"></i></button>
      <form>
        <div className='f3 b' style={{'color': '#888'}}>Create your own</div>
        <input className='dib' type='text' name='create' value={text} onChange={onChange}/>
        <button type='submit' className='ma2 pa2 w3 bg-green bn grow' onClick={onClick}>
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
        {/* {text && <div>{text}</div> } */}
      </form>
    </div>
  )
}

export default CheckboxForm