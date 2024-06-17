const express = require('express');
const router = express.Router();
const db = require('../modules/classes/db');

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard'); // Render view from views/admin/dashboard.pug
});

// Add class form route
router.get('/add-class', (req, res) => {
  res.render('admin/add-class'); // Render view from views/admin/add-class.pug
});


module.exports = router;
