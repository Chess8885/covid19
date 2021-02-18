import React from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
      <h1>Covid19 Tracker</h1>


      
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >

      <MenuItem value="worldwide">Worldwide</MenuItem>
      <MenuItem value="worldwide">Option 2</MenuItem>
      <MenuItem value="worldwide">Option 3</MenuItem>
      <MenuItem value="worldwide">Option 4</MenuItem>
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
