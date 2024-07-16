const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

db.sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.error('Error syncing database', error);
    });

module.exports = app;
