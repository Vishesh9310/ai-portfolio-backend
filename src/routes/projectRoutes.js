const express = require('express');
const { getTopProjects, getDataProjects, getAverageProjects, getFeaturedProjects} = require('../controllers/projectController');

const router = express.Router();

// Backend (projectRoutes.js)
router.get('/top', getTopProjects); // /api/projects/top
router.get('/data', getDataProjects); // /api/projects/data
router.get('/average', getAverageProjects); // /api/projects/average
router.get('/featured', getFeaturedProjects); // /api/projects/featured

module.exports = router;