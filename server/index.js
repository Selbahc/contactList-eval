const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes');

const app = express();
mongoose.connect('mongodb://localhost:27017/contacts', () => console.log('DB connected'));

app.use(cors());
app.use('/listeContact', router);

app.listen(3001, () => console.log('server listening'))