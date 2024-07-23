const dotEnv = require('dotenv');
const express = require('express');
const studentRouter = require('./routes/studentRoute');

const app = express();

//middlwares
dotEnv.config({ path: './config/.env' });

app.use(express.json());
//loclahost:5000/students

app.use('/students', studentRouter);

app.use('/', (req, res) => {
  res.send(`<h3>NOT FOUND</h3>`);
});

app.listen(process.env.PORT, () => {
  console.log('server started at port 5000');
});
