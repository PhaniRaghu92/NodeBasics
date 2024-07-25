const express = require('express');
const empRouter = express.Router();
const { StatusCodes } = require('http-status-codes');

//HTTP GET
empRouter.get('/', (req, res) => {
  res.status(200).json({ result: 'fetching all Employeees' });
});

//HTTP GET/:id
empRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res
    .status(StatusCodes.OK)
    .json({ result: 'fetching single Employee for ' + id });
});

//HTTP PUT/:id
empRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ result: 'Updating an employee::' + id });
});

//HTTP POST
//payload: req.body
empRouter.post('/', (req, res) => {
  res.status(StatusCodes.CREATED).json({ result: 'Creating an employee' });
});

//HTTP DELETE/:id
empRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  res
    .status(StatusCodes.NO_CONTENT)
    .json({ result: 'Deleting an employee' + id });
});

module.exports = empRouter; //default Export
//module.exports = {empRouter}; //name Export
