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

// Fetch classes list route
router.get('/classes', async (req, res) => {
  const classes = await db.getClasses();
  res.render('admin/classes', { title: 'Admin Classes', classes });
});

module.exports = router;
