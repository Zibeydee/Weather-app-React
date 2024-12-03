import './App.css';
import Cities from './components/Cities/Cities';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import Header from './components/Header/Header';
import Map from './components/Map/Map'
import Summary from './components/Summary/Summary';



function App() {
  
  return (
    <div className="App">
       <Header/>
       <div className='app2'>
      <CurrentWeather/>
      <Map/>
      <Cities/>
      <Forecast/>
      <Summary/>
      </div>
     
   
     
    </div>
  );
}

export default App;
