import { React, useState} from 'react';
import './CheckboxForm.css';

const CheckboxForm = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    console.log(text);
    
    
  }

  return (
    <div>
      <div className="container">
        <h2>Select the habits you want to build</h2>
        <div className="list">
          <div className="form-element">
            <input type="checkbox" name="habit" value="workout" id="workout" />
            <label htmlFor="workout">
              <div className="title">
                Workout
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="meditation" id="meditation" />
            <label htmlFor="meditation">
              <div className="title">
                Meditation
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="reading" id="reading" />
            <label htmlFor="reading">
              <div className="title">
                Reading
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="writing" id="writing" />
            <label htmlFor="writing">
              <div className="title">
                Writing
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="painting" id="painting" />
            <label htmlFor="painting">
              <div className="title">
                Painting
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="journaling" id="journaling" />
            <label htmlFor="journaling">
              <div className="title">
                Journaling
              </div>
            </label>
          </div>
          <div className="form-element">
            <input type="checkbox" name="habit" value="running" id="running" />
            <label htmlFor="running">
              <div className="title">
                Running
              </div>
            </label>
          </div>
        </div>
        <div className='f3 b pa3 ma3' style={{'color': '#888'}}>Or...</div>
      </div> 
      <form>
        <div className='f3 b' style={{'color': '#888'}}>Create your own</div>
        <input className='dib' type='text' name='create' onChange={onChange}/>
        <button type='submit' className='ma2 pa2 w3 bg-green bn grow' onClick={onClick}>
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
        {text && <div>{text}</div> }
      </form>
    </div>
  )
}

export default CheckboxForm