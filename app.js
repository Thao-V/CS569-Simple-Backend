var express = require('express');
var cors = require('cors');

var dataRouter = require('./routes/data');
var authRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/data', dataRouter);
app.use('/auth', authRouter);


app.listen(3000, console.log('Listening on 3000...'))