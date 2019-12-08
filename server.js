const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const auth = require('./routes/api/auth');
const bento = require('./routes/api/bento');

const app = express();
//connect to database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/auth', auth);
app.use('/api/bento', bento);

const PORT = 5000;

app.listen(PORT, () =>
  console.log(
    `Server running at PORT ${PORT}, at --- http://localhost:${PORT}/`
  )
);
