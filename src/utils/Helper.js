import Config from "./config";

function url(city) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Config.API_KEY}`;
}

async function searchByCityName(city) {
  const responseData = await fetch(url(city), { origin: "cross" });
  const data = await responseData.json();
  return data;
}

function kelvinToCelcius(kelvin) {
  return Math.floor(kelvin - 273.15);
}

function imageIcon(iconName) {
  return `https://openweathermap.org/img/wn/${iconName}@2x.png`;
}

function getCityTime() {
  const date = new Date();
  return `${date.getHours()}: ${date.getMinutes()}`;
}

export { searchByCityName, kelvinToCelcius, url, imageIcon, getCityTime };
