import { React, useState} from 'react';
import './Habit.css';

const Habit = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const onChecked = (e) => {
    setIsChecked(e.target.checked);
  }

  const onChange = (e) => {
    setDuration(e.target.value);
  }

  const onSubmit = () => {
    console.log({
      name: name,
      status: isChecked,
      duration: duration
    })
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted && 
        <tr>
          <td>{name}</td>
          <td><input type='checkbox' name='habit' onChange={onChecked} /></td>
          <td><input type='number' id='duration' onChange={onChange} /></td>
          <td><button type='button' className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib bg-green' onClick={onSubmit} disabled={!isChecked}>Submit</button></td>
        </tr>
      }
    </>
  )
}

export default Habit