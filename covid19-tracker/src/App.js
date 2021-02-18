import React, {useState} from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'USA', 'UK', 'INDIA'
  ]);
  return (
    <div className="app">
      <div className="app__header">
      <h1>Covid19 Tracker</h1>


      
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
      {
        countries.map((countries) => (
          <MenuItem value={countries}>{countries}</MenuItem>
        ))
      }
      </Select> 

      </FormControl>
      </div>

      {/* Header */}
      {/* Title */}

      {/* Info box */}
      {/* Info box */}
      {/* Info box */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
