const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Replace the following values with your actual MongoDB credentials and host
const dbUrl = `mongodb+srv://kathanpatel29:kathan%40290700007@cluster0.k1u26gn.mongodb.net/swimmingClass?retryWrites=true&w=majority&appName=Cluster0/swimmingClasses`;
console.log("Database URL:", dbUrl);  

// Set up Schema and model
const ClassSchema = new mongoose.Schema({
  name: String,
  level: String,
  schedule: String,
  description: String
});

const Class = mongoose.model("Class", ClassSchema);

// MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); // Connect to MongoDB
}

// Get all classes from the classes collection
async function getClasses() {
  await connect();
  return await Class.find({}); // Return array for find all
}

// Get a single class by its ID
async function getClassById(id) {
  await connect();
  return await Class.findById(id);
}

// Initialize classes collection with some data
async function initializeClasses() {
  await connect();
  const classList = [
    {
      name: "Beginner Swimming",
      level: "Beginner",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      description: "Learn the basics of swimming in a supportive environment."
    },
    {
      name: "Intermediate Swimming",
      level: "Intermediate",
      schedule: "Tue, Thu - 2:00 PM",
      description: "Build upon your existing skills and improve your technique."
    },
    {
      name: "Advanced Swimming",
      level: "Advanced",
      schedule: "Sat, Sun - 4:00 PM",
      description: "Perfect your swimming strokes and endurance under expert guidance."
    }
  ];

  // Check if classes already exist, if not, insert them
  const count = await Class.countDocuments();
  if (count === 0) {
    await Class.insertMany(classList);
  }
}

// Function to add one class
async function addClass(className, classLevel, classSchedule, classDescription) {
  await connect();
  let newClass = new Class({
    name: className,
    level: classLevel,
    schedule: classSchedule,
    description: classDescription
  });
  await newClass.save(); // This line saves to the DB
}



module.exports = {
  getClasses,
  getClassById,
  initializeClasses,
  addClass
};
