const express = require('express');
const { validate } = require('./middlewares/validation'); //named export
const employeeRouter = require('./routes/employeeRoute');

const app = express();
//middle ware
app.use(express.json()); // this middleware help in accepting data in req.body

//
app.use('/api/employee', employeeRouter);
app.use('/', (req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

app.listen(5000, 'localhost', () => {
  console.log(`server started at port :: ${5000}`);
});
