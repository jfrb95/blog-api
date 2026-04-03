const cors = require('cors');
const express = require('express');

const passport = require('./config/passport.js');
const { UserRouter, PostRouter, CommentRouter, AuthRouter } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use((req, res, next) => {
  req.context = {
    //use this if necessary
  }
  next();
});

app.use('/auth', AuthRouter);
app.use('/users', UserRouter);
app.use('/posts', PostRouter);
app.use('/comments', CommentRouter);
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