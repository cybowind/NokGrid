const express = require('express'); // Use Express
const app = express(); 
const port = process.env.PORT || 5000; // Server on port 5000
const fs = require('fs')  // Access to filesystem

//////////////////////////////////////////////////////////
// Allow cross origin resources sharing
//////////////////////////////////////////////////////////
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//////////////////////////////////////////////////////////
// Define some routes
//////////////////////////////////////////////////////////
app.use(express.static('../public'));

//////////////////////////////////////////////////////////
// Mock data to be read in from server file
//////////////////////////////////////////////////////////
global.mockData = {}  // Global variable to hold the mock data
const MOCK_DATA_FILE = './data/mock_operation_data_5000.json';

function getData() {  // Function to start async read of the mock data
  fs.readFile(MOCK_DATA_FILE, 'utf8', (error, data) => {
      if (error) {
          console.log(error);
          return;
      }
      // console.log(data);
      gotData(data);
  })    
}

function gotData(data) {  // Callback upon completion of mock data read
  global.mockData = JSON.parse(data);
  console.log(global.mockData[0]);
}

getData();                // Read in the mock data

//////////////////////////////////////////////////////////
// Server port listening and routing
//////////////////////////////////////////////////////////
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/mock_data', (req, res) => { 
  res.send({ 
    express: JSON.stringify(global.mockData) === '{}' 
    ? "Loading..."
    : global.mockData
  }); 
}); 

app.use(express.static('public'));
app.use(express.static('public/build'));
