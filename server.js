const express = require('express');
const mongoose = require('mongoose');

const employeeRouter = require('./routes/employeeRoute');
const { validate } = require('./middlewares/validation'); //named export
const db = require('./db');

const app = express();

//middle ware
app.use(express.json()); // this middleware help in accepting data in req.body

//
app.use('/api/employee', employeeRouter);

//

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

// mongodbconnection using promises
// mongoose
//   .connect('mongodb://localhost:27017')
//   .then((d) => {
//     console.log('Connected successfully');
//   })
//   .catch((e) => console.log(e));

(async function connect() {
  const conn = await db.createConnection('mongodb://localhost:27017/empdb');
  if (conn) {
    console.log('Mongo db connected successsfully');
  } else {
    console.log('Mongo db failed to connect');
  }
})();

app.listen(5000, 'localhost', () => {
  console.log(`server started at port :: ${5000}`);
});
