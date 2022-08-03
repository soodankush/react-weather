import {useEffect, useState} from "react";
import { WEATHER_API_URL, WEATHER_API_KEY} from "./config";

const WeatherData = ({locationName}) => {
  const [todayTemperature, setTodayTemperature] = useState(null);
  const [tomorrowTemperature, setTomorrowTemperature] = useState(null);
  const [todayWeatherDescription, setTodayWeatherDescription] = useState('No Data Available');
  const date = '2022-08-20';

  useEffect(() => {
    fetch(`${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${locationName}&aqi=no`)
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch data');
        }
        return res.json();
      })
      .then(data => {
        setTodayTemperature(data.current.temp_c);
        setTodayWeatherDescription(data.current.condition.text);
      })

    fetch(`${WEATHER_API_URL}/future.json?key=${WEATHER_API_KEY}&q=${locationName}&dt=${date}`)
      .then(res => {
        if(!res.ok) {
          throw Error(`Could not fetch the data for ${date}`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data.forecast);
        setTomorrowTemperature(data.forecast.forecastday[0].day.avgtemp_c);
      })
  }, [locationName]);

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="weather-card one">
            <div className="top">
              <div className="wrapper">
                <div className="mynav">
                  <a href><span className="lnr lnr-chevron-left"></span></a>
                  <a href><span className="lnr lnr-cog"></span></a>
                </div>
                <h1 className="heading">{todayWeatherDescription}</h1>
                <h3 className="location">{locationName}</h3>
                <p className="temp">
                  <span className="temp-value">{todayTemperature}</span>
                  <span className="deg">0</span>
                  <a href><span className="temp-type">C</span></a>
                </p>
              </div>
            </div>
            <div className="bottom">
              <div className="wrapper">
                <ul className="forecast">
                  <a href><span className="lnr lnr-chevron-up go-up"></span></a>
                  <li>
                    <span className="date">Yesterday</span>
                    <span className="lnr lnr-sun condition">
									<span className="temp">23<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
                  </li>
                  <li className="active">
                    <span className="date">Today</span>
                    <span className="lnr lnr-cloud condition">
									<span className="temp">21<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="weather-card rain">
            <div className="top">
              <div className="wrapper">
                <div className="mynav">
                  <a href><span className="lnr lnr-chevron-left"></span></a>
                  <a href><span className="lnr lnr-cog"></span></a>
                </div>
                <h1 className="heading">Rainy day</h1>
                <h3 className="location">{locationName}</h3>
                <p className="temp">
                  <span className="temp-value">{tomorrowTemperature}</span>
                  <span className="deg">0</span>
                  <a href><span className="temp-type">C</span></a>
                </p>
              </div>
            </div>
            <div className="bottom">
              <div className="wrapper">
                <ul className="forecast">
                  <a href><span className="lnr lnr-chevron-up go-up"></span></a>
                  <li>
                    <span className="date">{date}</span>
                    <span className="lnr lnr-sun condition">
									<span className="temp">22<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
                  </li>
                  <li className="active">
                    <span className="date">Tomorrow</span>
                    <span className="lnr lnr-cloud condition">
									<span className="temp">18<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;