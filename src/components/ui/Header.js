import classes from "./Header.module.css";

function HeaderText({ cityName, time }) {
  return (
    <section className={classes.container}>
      <div>
        <h2>{cityName}</h2>
      </div>
      <div>
        <b>{time}</b>
      </div>
    </section>
  );
}

export default HeaderText;
