const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./connect/database')
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tasks', require('./routes/taskRoutes'));

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`server listening at localhost:${port}/api/tasks`));
