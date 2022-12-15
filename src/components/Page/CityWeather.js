import Card from "../ui/Card";
import { imageIcon, kelvinToCelcius } from "../../utils/Helper";
import classes from "./CityWeather.module.css";
import HeaderText from "../ui/Header";

function CityWeather({ data }) {
  return (
    <Card>
      <HeaderText cityName={data.name} time={data.currentTime} />
      <div className={classes.displayTemp}>
        <img src={imageIcon(data.weather[0].icon)} alt="imageIcon" />
        <h3>{kelvinToCelcius(data.main.temp)}°c</h3>
        <span>{data.weather[0].main}</span>
        <img src={imageIcon(data.weather[0].icon)} alt="imageIcon" />
      </div>
      <div className={classes.content}>
        <ul className={classes.desc}>
          <li className={classes.descList}>
            <b>Pressure: </b>
            {data.main.pressure}mb
          </li>
          <li className={classes.descList}>
            <b>Humidity: </b>
            {data.main.humidity}%
          </li>
          <li className={classes.descList}>
            <b>Wind: </b> {data.wind.speed}km/hr
          </li>
          <li className={classes.descList}>
            <b>Visibility: </b>
            {data.visibility}m
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default CityWeather;
