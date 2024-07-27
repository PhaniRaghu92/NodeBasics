const express = require('express');
const empRouter = express.Router();
const { StatusCodes } = require('http-status-codes');

const Employee = require('../models/employee');
const { AsyncHandler } = require('../util');

//HTTP GET
// empRouter.get('/', async (req, res) => {
//   try {
//     const results = await Employee.find({});
//     res.status(200).json({ result: results });
//   } catch (error) {
//     res.status(500).json('INTERNAL SERVER ERROR');
//   }
// });

empRouter.get(
  '/',
  AsyncHandler(async (req, res) => {
    const results = await Employee.find({});
    res.status(200).json({ result: results });
  })
);

//HTTP GET/:id
empRouter.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id });
    if (!employee) {
      return res
        .status(404)
        .json({ result: 'Unable to find the employee with id ' + id });
    }
    res.status(200).json(employee);
  })
);

// empRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const employee = await Employee.findOne({ _id: id });
//     if (!employee) {
//       return res
//         .status(404)
//         .json({ result: 'Unable to find the employee with id ' + id });
//     }
//     res.status(200).json(employee);
//   } catch (error) {
//     res.status(500).json('INTERNAL SERVER ERROR');
//   }
// });

//HTTP PUT/:id
empRouter.put('/:id', async (req, res) => {
  const { id } = req.params;

  const { name, salary, email, active, loc } = req.body;
  try {
    const empUpdate = await Employee.findOne({ _id: id });
    if (!empUpdate) {
      return res
        .status(200)
        .json({ result: 'Unable to find the emp to update' + id });
    }

    empUpdate.name = name;
    empUpdate.salary = salary;
    empUpdate.active = active;
    empUpdate.loc = loc;
    empUpdate.email = email;

    empUpdate.save();
    res.status(200).json(empUpdate);
  } catch (error) {
    res.status(500).json('INTERNAL SERVER ERROR');
  }
});

//HTTP POST
//payload: req.body
empRouter.post('/', async (req, res) => {
  const { email, loc, active, name, salary } = req.body;
  const newEmployee = {
    name,
    email,
    loc,
    salary,
    active
  };
  try {
    const newEmp = await Employee.create(newEmployee);
    if (!newEmp) {
      return res.status(500).json({ result: 'Unable to create an employeee' });
    }
    res.status(200).json({ result: newEmp });
  } catch (error) {
    res.status(500).json('INTERNAL SERVER ERROR' + error);
  }
});

//HTTP DELETE/:id
empRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { deletedCount } = await Employee.deleteOne({ _id: id });

    if (deletedCount > 0) {
      return res
        .status(StatusCodes.OK)
        .json({ result: 'Deleting an employee' + id });
    }
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ result: 'Unable to delete the record having' + id });
  } catch (error) {
    res.status(500).json('INTERNAL SERVER ERROR');
  }
});

module.exports = empRouter; //default Export
//module.exports = {empRouter}; //name Export
