'use strict'

const express = require("express");
const cors = require("cors");
const config = require("./config");
const plateRoutes = require('./routes/plateRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/plates', plateRoutes);
app.use('/api/restaurants', restaurantRoutes);

app.listen(config.port, () => {
    console.log(`API rodando em ${config.url}`);
})
