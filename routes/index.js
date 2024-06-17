const express = require('express');
const router = express.Router();
const db = require("../modules/classes/db");

// Example route: Home page
router.get('/', (req, res) => {
  res.render('index'); // Render view from views/index.pug
});

// Fetch classes list route
router.get('/classes', async (req, res) => {
  const classes = await db.getClasses();
  res.render('classes', { title: 'Classes', classes });
});

// Example route: About page
router.get('/about', (req, res) => {
  res.render('about'); // Render view from views/about.pug
});

// Example route: Contact page
router.get('/contact', (req, res) => {
  res.render('contact'); // Render view from views/contact.pug
});



module.exports = router;
