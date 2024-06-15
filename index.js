const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./modules/classes/db");

const app = express();
const port = process.env.PORT || 8888;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes setup
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

// Public routes
app.use('/', indexRouter);

// Admin routes
app.use('/admin', adminRouter);

// Initialize classes
(async () => {
  try {
    // Check if classes are already initialized
    const existingClasses = await db.getClasses();
    if (existingClasses.length === 0) {
      // If no classes found, initialize them
      await db.initializeClasses();
      console.log("Initialized classes successfully");
    } else {
      console.log("Classes already initialized");
    }
  } catch (error) {
    console.error("Failed to initialize classes:", error);
    process.exit(1); // Exit the process if initialization fails
  }
})();

// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
