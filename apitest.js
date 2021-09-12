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

//DB connect
mongoose.connect(
  process.env.DB_CONNECT, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true/* ,
      useFindAndModify: false */
});

//mongoose.set('useCreateIndex', true);

//Importing routes
const customerRoute       = require('./routes/customer');

//Make routes available
app.use('/customer',  customerRoute);

const port = process.env.PORT;

app.listen(port, function (err) {
    console.log("apitest.js >>>")
    console.log('server listening on port '+port);
    if (err) {
      console.log("err >>>")
      console.log(err)
    }
  });