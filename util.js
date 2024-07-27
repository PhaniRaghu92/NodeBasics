function AsyncHandler(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'INTERNAL SERVER ERROR' + err });
    }
  };
}

module.exports = { AsyncHandler };

// //Higher order function

// function Execute(fnc) {
//   return async (a, b) => {
//     try {
//       await fnc(a, b);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// const fun1 = async (a, b) => {
//   console.log('some code in fun1', a, b);
// };

// const fun2 = async (a, b) => {
//   console.log('some code in fun2', a, b);
// };

// const f1 = Execute(fun1);
// const f2 = Execute(fun2);
// f1(10, 20);
// f2(30, 50);
