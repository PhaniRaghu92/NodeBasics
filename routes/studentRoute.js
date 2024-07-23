const express = require('express');

const studentRouter = express.Router();

//http:localhost:5000/student/
//HTTP GET
studentRouter.get('/', (req, res) => {
  res.status(200).json({
    results: students
  });
});

//http:localhost:5000/student/:id
//HTTP GET
studentRouter.get('/:studentId', (req, res) => {
  const { studentId } = req.params; //destrucing the req.params object

  const student = students.filter(
    (student) => student.sno === Number(studentId)
  );

  // console.log(!student.length); //true
  // console.log(!2); //false
  // console.log(!0); //true
  // console.log(!1); //false

  if (student.length < 1) {
    return res.status(404).json({
      results: `Student with id ${studentId} not found`
    });
  }

  res.status(200).json({
    results: student[0]
  });
});

// POST //OBJECT
// http://localhost:5000/student/:id
//params id
studentRouter.post('/', (req, res) => {
  console.log(req.body);
  //
  //save to db
  students.push(req.body);
  //
  res.status(201).json({
    student: 'Student Created with id ' + req.body.sno
  });
});

// DELTET //OBJECT
// http://localhost:5000/student/

studentRouter.delete('/:studentId', (req, res) => {
  const { studentId } = req.params; //destrucing the req.params object

  //logic to delete the student

  students = students.filter((stu) => stu.sno != Number(studentId));

  //
  res.status(200).json({
    results: `Deleting  student with ${studentId}`
  });
});

// PUT //OBJECT
// http://localhost:5000/student/:id
//params id ,object
studentRouter.put('/:id', (req, res) => {
  res.status(201).json({
    student: 'Student updated for id' + req.params.id
  });
});

let students = [
  {
    sno: 1,
    name: 'Gopi',
    loc: 'BLR'
  },
  {
    sno: 2,
    name: 'GIRI',
    loc: 'DEL'
  },
  {
    sno: 3,
    name: 'SIRI',
    loc: 'HYD'
  },
  {
    sno: 4,
    name: 'VARI',
    loc: 'CHN'
  }
];

module.exports = studentRouter;
