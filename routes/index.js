const express = require('express');
const router = express.Router();

// Example route: Home page
router.get('/', (req, res) => {
  res.render('index'); // Render view from views/index.pug
});

// Example route: About page
router.get('/about', (req, res) => {
  res.render('about'); // Render view from views/about.pug
});

// Example route: Contact page
router.get('/contact', (req, res) => {
  res.render('contact'); // Render view from views/contact.pug
});

// Example route: Gallery page
router.get('/gallery', (req, res) => {
  res.render('gallery'); // Render view from views/gallery.pug
});

module.exports = router;
