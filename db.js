const mongoose = require('mongoose');

const createConnection = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    return conn;
  } catch (error) {
    console.log('Unable to connect Mongodb');
  }
};

module.exports = { createConnection };
