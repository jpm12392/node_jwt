const express = require('express');
const sequelize = require('./config/database'); // Import the sequelize instance
const User = require('./models/User'); // Import the Post model
const userRoutes = require('./routes/userRoutes'); // Import post routes

require('dotenv').config();

const app = express();



app.use(express.json()); // To parse JSON bodies

app.use('/api/users', userRoutes)

// Sync database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized with model changes.');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});