const express   = require('express');
const dotenv    = require('dotenv');
const morgan    = require('morgan');
const cors      = require('cors');
const mongoose  = require('mongoose');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors())
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT;

app.listen(port, function (err) {
    console.log("apitest.js >>>")
    console.log('server listening on port '+port);
    if (err) {
      console.log("err >>>")
      console.log(err)
    }
  });