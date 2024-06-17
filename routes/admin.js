const express = require('express');
const router = express.Router();
const db = require('../modules/classes/db');

// Admin dashboard route
router.get('/', (req, res) => {
  res.render('admin/dashboard'); // Render view from views/admin/dashboard.pug
});

// Add class form route
router.get('/add-class', (req, res) => {
  res.render('admin/add-class'); // Render view from views/admin/add-class.pug
});


router.post('/addclass', (req, res) => {
  const { className, level, schedule, description } = req.body; // Assuming form fields are className, instructor, schedule

  // Example: Save class to database using db module
  db.addClass(className, level, schedule, description)
    .then(result => {
      res.redirect('/admin/dashboard'); // Redirect to classes listing or dashboard after successful submission
    })
    .catch(err => {
      console.error('Error adding class:', err);
      res.status(500).send('Error adding class'); // Handle error response
    });
});

module.exports = router;
