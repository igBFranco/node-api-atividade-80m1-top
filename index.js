'use strict'

const express = require("express");
const cors = require("cors");
const config = require("./config");
const plateRoutes = require('./routes/plateRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/plates', plateRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/users', userRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/delivery', deliveryRoutes);

app.listen(config.port, () => {
    console.log(`API rodando em ${config.url}`);
})
