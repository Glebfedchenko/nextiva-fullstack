
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');


const licensesRoutes = require('./routes/licenses');
const permissionsRoutes = require('./routes/permissions');
// const bodyParser = require('body-parser');
// const bearerToken = require('express-bearer-token');

// Constants
const PORT = process.env.PORT || 7000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URI || 'http://localhost:8080',
  optionsSuccessStatus: 200,
}));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


app.use('/licenses', licensesRoutes);
// app.use('/permissions', permissionsRoutes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


