import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { Settings } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Search from '../../layout/Dashboard/Header/HeaderContent/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import { display } from '@mui/system';

// Custom function to select a random element from an array
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Custom function to generate random drive types
const getRandomDriveType = () => {
  const driveTypes = ['AWD', 'FWD', 'RWD', '4WD'];
  return getRandomElement(driveTypes);
};

// Custom function to generate random CPM categories
const getRandomCPMCategory = () => {
  const cpmCategories = ['Low', 'Medium', 'High'];
  return getRandomElement(cpmCategories);
};

// Custom function to generate random actions
const getRandomAction = () => {
  const actions = ['View', 'Edit', 'Delete'];
  return getRandomElement(actions);
};

const generateDummyData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      Name: faker.name.fullName(),
      Age: faker.datatype.number({ min: 18, max: 70 }),
      Year: faker.date.past(30).getFullYear(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Fuel: faker.vehicle.fuel(),
      Type: faker.vehicle.type(),
      'Drive Train': getRandomDriveType(),
      'CPM Category': getRandomCPMCategory(),
      MPG: faker.datatype.float({ min: 10, max: 50, precision: 0.1 }),
      VIN: faker.vehicle.vin(),
      'Driver Name': faker.name.fullName(),
      'Total Miles': faker.datatype.number({ min: 5000, max: 200000 }),
      'Annual Mileage': faker.datatype.number({ min: 1000, max: 30000 }),
      'Monthly Mileage': faker.datatype.number({ min: 100, max: 3000 }),
      Action: getRandomAction()
    });
  }
  return data;
};

const FleetList = () => {
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: 'Name',
      checkboxSelection: true
    },
    { field: 'Age' },
    { field: 'Year' },
    { field: 'Make' },
    { field: 'Model' },
    { field: 'Fuel' },
    { field: 'Type' },
    { field: 'Drive Train' },
    { field: 'CPM Category' },
    { field: 'MPG' },
    { field: 'VIN' },
    { field: 'Driver Name' },
    { field: 'Total Miles' },
    { field: 'Annual Mileage' },
    { field: 'Monthly Mileage' },
    { field: 'Action' }
  ]);

  useEffect(() => {
    // Generate 100 rows of dummy data
    setRowData(generateDummyData(100));
  }, []);

  return (
    <>
      <Grid xs={12} sx={{ mb: 2, mr: 2, ml: 2 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Flit List</Typography>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" className="btn-primary">
            <span> Next </span>
          </Button>
          <Button variant="contained" className="btn-primary">
            <Settings style={{ fontSize: 16 }} />
            <span> Action </span>
          </Button>
          <Button variant="contained" className="btn-primary">
            <span> New </span>
          </Button>
          <Search />
        </Box>
      </Grid>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 540 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} pagination={true} paginationPageSize={10} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default FleetList;
