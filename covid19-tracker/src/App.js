import React, {useEffect, useState} from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2 // us, uk, fr
            }));
            setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log('toto', countryCode);
    setCountry(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
      <h1>Covid19 Tracker</h1>

      <FormControl className="app__dropdown">
        <Select
          variant="outlined" onChange={onCountryChange}
          value={country}>
     <MenuItem value="worldwide">Worldwide</MenuItem>
      {countries.map((country) => (
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))
      }
      </Select> 

      </FormControl>
      </div>

      <div className ="app__stats">
        <InfoBox title="Coronavirus cases" cases={22} total={2000}/>
        <InfoBox title="Coronavirus recovered" cases={22} total={3000}/>
        <InfoBox title="Deaths" cases={22} total={4000}/>
        {/* Infoboxs title="cases" */}
        {/* Infoboxs title="recoveries" */}
        {/* Infoboxs title="" */}

      </div>

      {/* Header */}
      {/* Title */}

      {/* Info box */}
      {/* Info box */}
      {/* Info box */}

      {/* Table */}
      {/* Graph */}
      <Map/>
      {/* Map */}
    </div>
  );
}

export default App;
