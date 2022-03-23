import { useContext } from "react";
import HabitContext from "../../context/habitContext";

const Checkboxes = ({ name, status }) => {
  const { setStatus } = useContext(HabitContext);

  const onChecked = (e) => {
    // setIsChecked(!ischecked);
    console.log(e.target.checked);
    setStatus(e.target.value, e.target.checked);
  }
  
  return (
    <div className="form-element">
      <input type="checkbox" name="habit" value={name} id={name} onChange={onChecked} checked={status} />
      <label htmlFor={name}>
        <div className="title">
          {name}
        </div>
      </label>
    </div>
  )
}

export default Checkboxes