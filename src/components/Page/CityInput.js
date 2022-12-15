import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./CityInput.module.css";

function CityInput(props) {
  const enteredText = useRef();

  function onSubmitHandler(evt) {
    evt.preventDefault();

    const enteredCity = enteredText.current.value;

    if (enteredCity.trim().length === 0) {
      throw new Error();
    }
    props.apiHandler(enteredCity);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <input
            type="text"
            ref={enteredText}
            placeholder="Enter City"
            autoComplete="off"
          />
        </div>
        <div className={classes.actions}>
          <button className="btn">Search</button>
        </div>
      </form>
    </Card>
  );
}

export default CityInput;
