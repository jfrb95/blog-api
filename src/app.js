const express = require('express');

const app = express();

//MOVE THIS TO OTHER MODULES

const { UserModel } = require('./models');

UserModel.testUserModel();

//END

app.use('/', (req, res) => res.send("index"));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}`);
});