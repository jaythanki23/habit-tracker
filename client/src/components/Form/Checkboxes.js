import { useContext } from "react";
import HabitContext from "../../context/habitContext";

const Checkboxes = ({ name, status }) => {
  const { setStatus } = useContext(HabitContext);

  const onChecked = (e) => {
    // setIsChecked(!ischecked);
    console.log(e.target.value);
    setStatus(e.target.value, e.target.checked);
  }
  
  return (
    <div>
      {/* <input type="checkbox" name="habit" value={name} id={name} onChange={onChecked} checked={status} />
      <label htmlFor={name}>
        <div>
          {name}
        </div>
      </label> */}
      <input type="checkbox" className="btn-check" name={name} value={name} onChange={onChecked} id={name} checked={status} autoComplete="off" />
      <label className="fs-5 btn btn-outline-primary" htmlFor={name}>{name}</label>
    </div>
  )
}

export default Checkboxes