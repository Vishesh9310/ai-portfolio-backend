const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
// const chatRoutes = require('./routes/chatRoutes');

const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), "public")));

app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);

// app.use("/api/chat", chatRoutes);

module.exports = app;





// [
// {
//     "id": 4,
//     "title": "Library Management System",
//     "img": { "id": 101, "src": "/uploads/projects/image.png", "alt": "Main Image" },
//     "imageList": [],
//     "about": [
//       "The Library Management System is a terminal-based Java application designed to showcase practical implementation of OOP concepts like classes, objects, and methods.",
//       "The project includes a Book class for handling book details, a User class for managing library members, and a central Library class that controls the core system logic.",
//       "It provides a menu-driven interface that allows users to interact with the system easily via command-line options.",
//       "By simulating real-world library workflows, the project strengthens programming fundamentals, problem-solving skills, and basic system design using Java."
//     ],
//     "description": "Java-based command-line application demonstrating core OOP concepts for library operations.",
//     "tech": ["Java"],
//     "github": "https://github.com/Vishesh9310/Library-Management-System-Using-OOP-",
//     "live": "",
//     "date": "2025-06-26",
//     "status": "CLI based"
//   },
//   {
//     "id": 1,
//     "title": "Calculator",
//     "img": { "id": 101, "src": "/uploads/projects/calculator/image.png", "alt": "Main Image" },
//     "imageList": [],
//     "about": [
//       "The Basic Calculator Web App is a lightweight and responsive application designed to perform essential arithmetic operations including addition, subtraction, multiplication, division, and percentage calculations.",
//       "Built using pure HTML, CSS, and JavaScript, the project emphasizes clean structure, interactive styling, and efficient client-side logic without external dependencies.",
//       "The interface is crafted using CSS Grid and Flexbox to ensure proper alignment, responsiveness, and a smooth user experience across different screen sizes.",
//       "This project serves as a strong foundational exercise for practicing DOM manipulation, event handling, and real-world frontend UI development."
//     ],
//     "description":"A fully functional basic calculator web application built using vanilla JavaScript, HTML5, and CSS3. It supports decimal inputs, AC (All Clear), DEL (Delete), and essential arithmetic operations, with smooth hover effects and a responsive layout powered by CSS Grid and Flexbox. This project demonstrates core frontend concepts such as DOM manipulation, event handling, and interactive UI design without relying on external libraries.",
//     "tech": ["HTML", "CSS", "JavaScript"],
//     "github": "https://github.com/Vishesh9310/CodeAlpha_Calculator",
//     "live": "https://vishesh9310.github.io/Basic_Calculator/",
//     "date": "2024-07-20",
//     "status": "Frontend"
//   }]