const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('./routes/auth');
const adminRouter = require("./routes/admin");
const agentRouter = require("./routes/agent");
const userRouter = require("./routes/users");
// const MongoDBURI = 'mongodb+srv://klez:kleztech@cluster0-nm91y.mongodb.net/ecard';
const MongoDBURI = 'mongodb://127.0.0.1:27017/ecard';
const bodyParser = require('body-parser');
const Admin = require('./models/admin');
const bcrypt = require('bcryptjs');
const app = express();
mongoose.connect(MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connect => {
    // console.log('Connected to Database');
    Admin.findOne({
        email: 'superadmin@ecard.ng'
      })
      .then(user => {
        if (!user) {
          bcrypt.hash('password', 12)
            .then(hashedPassword => {
              const admin = Admin({
                email: 'superadmin@ecard.ng',
                password: hashedPassword
              });

              admin.save();
            })
            .catch(err => {
              console.log('Error occured 1')
            })
        }
        console.log('connected');
      })
      .catch(err => {
        console.log('Error occured 2')
      })
  })
  .catch(err => {
    console.log('Connection failed');
  })
app.use(bodyParser.json({
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, AdminAuthorization, UserAuthorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use('/api/admin', adminRouter);
app.use('/api/agent', agentRouter);
app.use('/api/user', userRouter);
app.use('/api', authRouter);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
})
module.exports = app;