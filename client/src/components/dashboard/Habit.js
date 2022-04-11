import { React, useState} from 'react';


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
          <td><input type='number' className='border border-2 rounded' id='duration' onChange={onChange} style={{'width': '100px'}} /></td>
          <td><button type='button' className='btn btn-success' onClick={onSubmit} disabled={!isChecked}>Submit</button></td>
        </tr>
      }
    </>
  )
}

export default Habit