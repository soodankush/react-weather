import Navbar from "./Navbar";
import WeatherData from "./WeatherData";
import './App.css';
import {useState} from "react";

const App = () => {
  const [location, setLocation ] = useState('');
  const handleSubmit = (locationData) => {
    console.log(`location data is ${locationData}`);
    setLocation(locationData);
  };
  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit}/>
        <WeatherData locationName={location}/>
    </div>
  );
}

export default App;
