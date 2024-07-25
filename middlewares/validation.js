const validate = (req, res, next) => {
  console.log(' EXECUTING CODE IN MIDDDLEWARE.............');
  if (req.body.user === 'Gopi') {
    return res.status(500).json({ message: 'body having user as Gopi' });
  }
  next();
};

module.exports = { validate };
