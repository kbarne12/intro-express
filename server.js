const express = require('express');
const app = express();
 const path = require('path');
app.listen(3000, function() {
    console.log('I am listening')
})

app.get('/', function(req, res) {
     res.send('<h1>Hello World</h1>');
   });
   app.get('/home', function(req, res) {
     res.render('home');
 });
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  const studentsDb = require('./data/students-db');

  app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentsDb.getAll()
    });
  });

  app.get('/', function(req, res) {  res.redirect('/home');});