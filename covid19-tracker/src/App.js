import React, {useEffect, useState} from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
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
    setCountry(countryCode);
    const url = countryCode === "worldwide" ? 'https://disease.sh/v3/covid-19/all' : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  };
  return (
    <div className="app">
      <div className="app__left">
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

      </div>


      <Map/>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      {/* Table */}
      {/* Graph */}
      </Card>
    </div>
  );
}

export default App;
